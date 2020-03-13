import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

class CartSummary extends React.Component {
  render(props) {
    const cartArray = this.props.cart;

    let itemsInCart;
    if (cartArray.length === 0) {
      itemsInCart = <h1>No Items In Cart</h1>;
    } else {
      itemsInCart = <h1>My Cart</h1>;
    }
    return (
      <div className="container-fluid">
        <button onClick={() => this.props.onRender('catalog', {})}>&lt; Back to Catalog</button>
        {itemsInCart}
        {cartArray.map(item => { return <CartSummaryItem key={item.cartItemId} cartItem={item}/>; })}
        <button onClick={() => this.props.onRender('checkout', {})} className="btn btn-primary float-right"></button>
      </div>
    );
  }
}

export default CartSummary;
