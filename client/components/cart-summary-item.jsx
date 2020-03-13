import React from 'react';

class CartSummaryItem extends React.Component {
  render(props) {
    const cartItem = this.props.cartItem;

    return (
      <div className="card mb-3 mt-3" style={{ maxWidth: '540 px' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={cartItem.image} className="card-img" alt="product-image"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{cartItem.name}</h2>
              <span className="card-text text-secondary mb-5">${(cartItem.price * 0.01).toFixed(2)}</span>
              <p className="card-text mt-3">{cartItem.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
