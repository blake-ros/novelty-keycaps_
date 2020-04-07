import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h1 className="text-center bg-dark"><i className="fas fa-dollar-sign"></i> Wicked Sales <i className="fas fa-dollar-sign"></i></h1>
        <div className="d-flex justify-content-end col-12"><h2 className="text-right pointer col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-4 pr-4" onClick={() => this.props.onRender('cart', {})}>{this.props.cartItemCount} Items  <i className="fas fa-shopping-cart"></i></h2></div>
      </div>
    );
  }
}

export default Header;
