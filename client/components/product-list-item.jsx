import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card col-3 ml-4 mr-4 mt-4">
        <img src={this.props.image} className="card-img-top h-50" alt="product one"></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <span className="text-secondary">${this.props.price}</span>
          <p className="card-text mt-3">{this.props.shortDescription}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;