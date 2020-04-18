import React from 'react';
import InitialModal from './initial-modal.jsx';

class Header extends React.Component {
  render(props) {
    const testimonial = 'The Ultimate Keycap Catalog';
    return (
      <div className="container-fluid pt-4 headerBackground">
        <h1 className="text-center">Novelty Keycaps_<h6 className="text-center testimonial">&quot;{testimonial}&quot;</h6></h1>
        <div className="row">
          <h2 className=" col-12 text-right pointer mr-4 pr-5" onClick={() => this.props.onRender('cart', {})}><i className="fas fa-shopping-cart mr-1 mt-1"></i> {this.props.cartItemCount}</h2>
          <InitialModal showInitialModal={this.props.showInitialModal} toggleInitialModal={this.props.toggleInitialModal} />
        </div>
      </div>
    );
  }
}

export default Header;
