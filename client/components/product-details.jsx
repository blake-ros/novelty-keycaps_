import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.newState.productId}`)
      .then(response => {
        return response.json();
      })
      .then(product => this.setState({ product }))
      .catch(err => console.error(err));
  }

  render() {
    const myProduct = this.state.product;

    if (!this.state.product) {
      return null;
    }
    return (
      <div className="container-fluid">
        <button onClick={() => this.props.onRender('catalog', {})}> &lt; Back to Catalog</button>
        <div className="card">
          <div className="row">
            <img className="col-6" src={myProduct.image} alt="product image"></img>
            <div className="col-6">
              <div className="card-body">
                <h1 className="mb-3">{myProduct.name}</h1>
                <span className="mb-3 text-secondary">${(myProduct.price * 0.01).toFixed(2)}</span>
                <p>{myProduct.shortDescription}</p>
                <button className="btn btn-primary pl-3 pr-3 pt-2 pb-2" onClick={() => this.props.addToCart(myProduct)}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="row">
            <p className="pl-4 pr-4">{myProduct.longDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
