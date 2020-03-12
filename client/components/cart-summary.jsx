import React from 'react';
import Header from './header.jsx';
import CartSummaryItem from './cart-summary-item.jsx';

class CartSummary extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header cartItemCount={this.state.cart.length}/>,
        <h1>My Cart</h1>,
        {CartSummaryItem},
        <h1>Item Total {total}</h1>
      </div>
    );
  }
}

export default CartSummary;
