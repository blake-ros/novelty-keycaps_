import React from 'react';

class Header extends React.Component {
  render() {
    const testimonial = 'The Ultimate Keycap Catalog';
    return (
      <div className="page-header">
        <h1 className="text-center pb-5 pt-5">Novelty Keycaps_<h6 className="text-center testimonial">&quot;{testimonial}&quot;</h6></h1>
        <div className="d-flex justify-content-end col-12"><h2 className="text-right pointer col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-4 pr-4" onClick={() => this.props.onRender('cart', {})}>{this.props.cartItemCount} Items  <i className="fas fa-shopping-cart"></i></h2></div>
      </div>
    );
  }
}

export default Header;
