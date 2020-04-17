import React from 'react';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: true
    };
  }

  removeItemModal() {
    return (
      <div className={`position-fixed h-100 w-100 ${this.props.showModal.displayNone ? 'd-none' : 'd-flex'} overlay ${this.props.showModal.show ? 'fade-in' : 'fade-out'}`}>
        <div className="m-auto p-4">
          <div className={`bg-white rounded p-3 modal-message ${this.props.showModal.show ? 'slide-in' : 'slide-out'}`}>
            <div className="d-flex">
              <i className="far fa-times-circle cancel-button ml-auto"
                onClick={this.props.toggleModal} />
            </div>
            <h5 className="text-center">New Item Added</h5>
            <p className="text-center">This item is now in your cart.</p>
            <div>
              <button className="btn btn-secondary mr-2 mb-4" onClick={() => this.props.newView('catalog', {})}>Continue Shopping</button>
              <button className="btn btn-primary text-white ml-2 mb-4" onClick={() => this.props.newView('cart', {})}>View Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
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
              <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-minus"></i>
                </div>
                <input type="number" className="text-center" value={this.state.quantity} />
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <button onClick={this.removeItemModal} className="btn btn-danger mt-2">Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
