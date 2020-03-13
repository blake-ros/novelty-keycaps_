import React from 'react';
import Header from './header.jsx';
import CartSummaryItem from './cart-summary-item.jsx';

class CartSummary extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     null
  //   }
  // }

  render(props) {
    const cartArray = this.props.cart;
    console.log(cartArray);

    return (
      <div className="container-fluid">
        <button onClick={() => this.props.onRender('catalog', {})}>&lt; Back to Catalog</button>
        <h1>My Cart</h1>
        {cartArray.map(item => { return <CartSummaryItem key={item.cartItemId} cartItem={item}/>; })}
        {/* <button onClick={() => this.props.onRender('catalog', {})}> &lt; Back to Catalog</button>
        <h1>My Cart</h1>,
        {
          cartArray.length === 0
            ? <h1>No Items In Cart</h1>
            : cartArray.map(item => { return <CartSummaryItem key={item.productId} item={item} />; })
        };
        <h1>Item Total </h1> */}
      </div>
    );
  }
}

export default CartSummary;
