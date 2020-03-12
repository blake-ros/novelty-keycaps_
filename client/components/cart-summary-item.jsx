import React from 'react';

class CartSummaryItem extends React.Component {
  render() {
    const cartItem = this.props.item;

    return (
      <div className="card mb-3" style="max-width: 540px;">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={cartItem.image} className="card-img" alt="product-image"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{cartItem.name}</h2>
              <span className="card-text">{cartItem.price}</span>
              <span className="card-text">{cartItem.shortDescription}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
