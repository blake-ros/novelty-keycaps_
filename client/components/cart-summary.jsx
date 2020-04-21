import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

class CartSummary extends React.Component {
  render(props) {
    const cartArray = this.props.cart;
    const cartTotal = this.props.cart.reduce((cur, acc) => cur + acc.totalPrice, 0).toFixed(2) / 100;
    let itemsInCart;
    let button;
    if (cartArray.length === 0) {
      itemsInCart = <h1 className="mt-3">No Items In Cart</h1>;
    } else {
      itemsInCart = <h1 className="mt-3">My Cart</h1>;
      button = <button onClick={() => this.props.onRender('checkout', {})} className="btn btn-primary float-right mr-4 mb-4">Checkout</button>;
    }
    return (
      <div className="container-fluid">
        <button className="btn btn-info mt-3" onClick={() => this.props.onRender('catalog', {})}>Back to Catalog</button>
        {itemsInCart}
        {cartArray.map(item => { return <CartSummaryItem key={item.cartItemId} cartItem={item} removeItem={this.props.removeItem} cart={this.props.cart} />; })}
        <h4 className="text-secondary mb-3">Item Total: ${cartTotal} {button}</h4>
      </div>
    );
  }
}

export default CartSummary;
