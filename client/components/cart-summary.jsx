import React from 'react';
import Header from './header.jsx';
import CartSummaryItem from './cart-summary-item.jsx';

class CartSummary extends React.Component {
  render() {
    const cartArray = this.state.cart;
    return (
      <div className="container-fluid">
        <Header cartItemCount={this.state.cart.length}/>,
        <button onClick={() => this.props.onRender('catalog', {})}> &lt; Back to Catalog</button>
        <h1>My Cart</h1>,
        {
          cartArray.length === 0
        ? <h1>No Items In Cart</h1>
        : cartArray.map(item => {
          return <CartSummaryItem key={item.productId} item={item}
        });
      }
        // {CartSummaryItem},
        <h1>Item Total {total}</h1>
      </div>
    );
  }
}

export default CartSummary;
