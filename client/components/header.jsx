import React from 'react';
import InitialModal from './initial-modal.jsx';
import Carousel from './carousel.jsx';

class Header extends React.Component {
  render(props) {
    const testimonial = 'The Ultimate Keycap Catalog';
    return (
      <div className="page-header">
        <h1 className="text-center pb-5 pt-5">Novelty Keycaps_<div><h6 className="text-center testimonial">&quot;{testimonial}&quot;</h6></div></h1>
        <div className="d-flex justify-content-end col-12"><h2 className="text-right pointer col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-4 pr-4" onClick={() => this.props.onRender('cart', {})}><i className="fas fa-shopping-cart"></i> {this.props.cartItemCount}</h2></div>
        <InitialModal showInitialModal={this.props.showInitialModal} toggleInitialModal={this.props.toggleInitialModal} />
      </div>
    );
  }
}

export default Header;
