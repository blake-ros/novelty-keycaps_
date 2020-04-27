import React from 'react';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: true,
      remove: false
    };
    this.removeItemModal = this.removeItemModal.bind(this);
    this.showRemoveItemModal = this.showRemoveItemModal.bind(this);
    this.hideRemoveModal = this.hideRemoveModal.bind(this);
    this.removeFromCartConfirmation = this.removeFromCartConfirmation.bind(this);
    this.decrementCartItem = this.decrementCartItem.bind(this);
    this.incrementCartItem = this.decrementCartItem.bind(this);
    this.quantityCartChange = this.quantityCartChange.bind(this);
    this.blurCartQuantity = this.blurCartQuantity.bind(this);
  }

  showRemoveItemModal(event) {
    event.preventDefault();
    this.setState({
      remove: true
    });
  }

  removeFromCartConfirmation(event) {
    const cartItemId = this.props.cartItem.cartItemId;
    const method = this.props.removeItem;
    this.setState({
      remove: false
    });
    method(cartItemId);
  }

  removeItemModal() {
    const cartItem = this.props.cartItem;

    if (this.state.remove === true) {
      return (
        <div className="position-fixed h-100 w-100 overlay d-flex">
          <div className="m-auto p-3">
            <div className="bg-white rounded p-3 modal-message">
              <div className="mt-2">
                <h3 className="text-center">Remove this Item?</h3>
              </div>
              <div className="mt-3">
                <h5>Item: {cartItem.name}</h5>
                <h5>Qty: {cartItem.quantity}</h5>
              </div>
              <div className="d-flex justify-content-around mt-4">
                <button className="btn btn-primary" onClick={this.hideRemoveModal}>Keep in cart</button>
                <button className="btn btn-danger" onClick={this.removeFromCartConfirmation} id={this.props.cartItem.cartItemId}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  hideRemoveModal(event) {
    event.preventDefault();
    this.setState({
      remove: false
    });
  }

  decrementCartItem(event) {
    let quantity = this.state.quantity;
    if (quantity === 1) {
      return null;
    } else {
      this.setState({
        quantity: --quantity
      });
    }
  }

  incrementCartItem(event) {
    let quantity = this.state.quantity;
    this.setState({
      quantity: ++quantity
    });
  }

  quantityCartChange(event) {
    this.setState({
      quantity: parseInt(event.currentTarget.value)
    });
  }

  blurCartQuantity(event) {
    if (this.state.quantity === 0) {
      this.setState({
        quantity: 1
      });
    }
  }

  render(props) {
    const cartItem = this.props.cartItem;
    console.log(this.props.cartItem.productId);

    let totalPriceRender;
    if (cartItem.quantity > 1) {
      totalPriceRender = <span className="card-text text-secondary mb-5">${(cartItem.totalPrice * 0.01).toFixed(2)}</span>;
    } else {
      totalPriceRender = <span className="card-text text-secondary mb-5">${(cartItem.price * 0.01).toFixed(2)}</span>;
    }

    return (
      <div className="card mb-3 mt-3" style={{ maxWidth: '540 px' }}>
        {this.removeItemModal()}
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={cartItem.image} className="card-img" alt="product-image"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{cartItem.name}</h2>
              {totalPriceRender}
              <p className="cart-text text-secondary mt-2">Quantity: {cartItem.quantity}</p>
              <p className="card-text mt-3">{cartItem.shortDescription}</p>
              <button onClick={this.showRemoveItemModal} className="btn btn-danger mt-2" id={cartItem.cartItemId}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
