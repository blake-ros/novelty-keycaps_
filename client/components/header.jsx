import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h1 className="text-center bg-dark"><i className="fas fa-dollar-sign"></i> Wicked Sales <i className="fas fa-dollar-sign"></i></h1>
        <h2 className="text-right">{this.props.cartItemCount} Items  <i className="fas fa-shopping-cart" onClick={() => this.props.onRender('cart', {})}></i></h2>
      </div>
    );
  }
}

export default Header;
