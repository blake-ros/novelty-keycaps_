import React from 'react';

class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="card mb-3" style="max-width: 540px;">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.item.image} alt="product-image"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{this.item.name}</h2>
              <span className="card-text">{this.item.price}</span>
              <span className="card-text">{this.item.shortDescription}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
