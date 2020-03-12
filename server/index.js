require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
    SELECT "productId", "name", "price", "image", "shortDescription"
    FROM "products";
    `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  const sql = `
    SELECT *
    FROM "products"
    WHERE "productId" = $1`;

  const params = [productId];

  if (productId <= 0) {
    return res.status(400).json({
      error: 'productId must be a postive integer'
    });
  }

  db.query(sql, params)
    .then(result => {
      if (result.rows.length === 0) {
        next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
      } else {
        return res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => console.error(err));
});

app.get('/api/cart', (req, res, next) => {
  const sql = `
    SELECT *
    FROM "carts"
    `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An error occured retrieving the cart'
      });
    });
});

app.post('/api/cart', (req, res, next) => {
  const { productId } = req.body;
  const sql = `
    SELECT "price"
    FROM "products"
    WHERE "productId" = $1
    `;

  const value = [productId];

  if (productId <= 0) {
    return res.status(400).json({
      error: 'productId must be a postive integer'
    });
  } else {
    db.query(sql, value)
      .then(result => {
        if (result.rows.length === 0) {
          throw new ClientError('cannot select this productId', 400);
        }
        const newSql = `
          INSERT INTO "carts" ("cartId", "createdAt")
          VALUES (default, default)
          RETURNING "cartId"`;

        return db.query(newSql).then(cartId => Object.assign(cartId.rows[0], result.rows[0]));
      })
      .then(result => {
        req.session.cartId = result.cartId;
        const updatedCart = `
          INSERT INTO "cartItems" ("cartId", "productId", "price")
          VALUES ($1, $2, $3)
          RETURNING "cartItemId"
          `;

        const values = [result.cartId, productId, result.price];

        return db.query(updatedCart, values);
      })
      .then(cartItemId => {
        const updatedCartId = `
        SELECT "c"."cartItemId",
               "c"."price",
               "p"."productId",
               "p"."image",
               "p"."name",
               "p"."shortDescription"
        FROM "cartItems" as "c"
        JOIN "products" as "p" using ("productId")
        WHERE "c"."cartItemId" = $1
        `;

        const cartItemId = [cartItemId]
        // console.log(values);

        return db.query(updatedCartId, [cartItemId]).then(result => res.status(201).json(result.rows[0]));
      })
      // .then(result => console.log(result))
      .catch(err => {
        console.error(err);
        res.status(400).json({
          error: 'This isnt the product you are looking for!'
        });
      });
  }

});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
