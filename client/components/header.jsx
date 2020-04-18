import React from 'react';
import InitialModal from './initial-modal.jsx';

class Header extends React.Component {
  render(props) {
    const testimonial = 'The Ultimate Keycap Catalog';
    return (
      <div className="container-fluid pt-4 bg-light">
        <h1 className="text-center">Novelty Keycaps_<h6 className="text-center testimonial">&quot;{testimonial}&quot;</h6></h1>
        <h2 className="d-flex justify-content-end pointer mr-4" onClick={() => this.props.onRender('cart', {})}><i className="fas fa-shopping-cart mr-2 mt-1"></i> {this.props.cartItemCount}</h2>
        <InitialModal showInitialModal={this.props.showInitialModal} toggleInitialModal={this.props.toggleInitialModal} />
      </div>
    );
  }
}

export default Header;
