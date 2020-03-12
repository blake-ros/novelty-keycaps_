import React from 'react';
import Header from './header.jsx';

class CartSummary extends React.Component {
  render() {
    return (
      <Header cartItemCount={this.state.cart.length}/>
    );
  }
}

export default CartSummary;
