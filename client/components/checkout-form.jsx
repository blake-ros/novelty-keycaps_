import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      shippingAddress: '',
      creditCard: '',
      orderConfirmation: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.orderConfirmation = this.orderConfirmation.bind(this);
    this.removeOrderConfirmationModal = this.removeOrderConfirmationModal.bind(this);
    this.renderOrderConfirmationModal = this.renderOrderConfirmationModal.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCreditCard(event) {
    this.setState({
      creditCard: event.target.value
    });
  }

  handleShipping(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.form(this.state);

    this.setState({
      view: 'order'
    });
  }

  renderOrderConfirmationModal(event) {
    this.setState({
      orderConfirmation: true
    });
  }

  // orderConfirmation() {

  // }

  removeOrderConfirmationModal(event) {
    this.setState({
      orderConfirmation: false
    });
    this.props.onRender('catalog', {});
  }

  render(props) {
    console.log(this.state);
    const cartTotal = this.props.cart.reduce((cur, acc) => cur + acc.totalPrice, 0).toFixed(2) / 100;
    let button;
    if (!this.state.name || !this.state.shippingAddress || !this.state.creditCard) {
      button = <button className="btn btn-primary float-right mt-5 mr-5 disabled" disabled={true}>Place Order</button>;
    } else {
      button = <button className="btn btn-primary float-right mt-5 mr-5" onClick={this.renderOrderConfirmationModal} onSubmit={this.renderOrderConfirmationModal}>Place Order</button>;
    }
    return (
      <div className="container w-50">
        <h1>Checkout</h1>
        <h2 className="text-secondary">Order Total: ${cartTotal}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mt-2" >
            <label>Name</label>
            <input type="name" className="form-control" onChange={this.handleNameChange}></input>
            <label className="mt-2">Credit Card</label>
            <input type="credit-card" className="form-control" onChange={this.handleCreditCard}></input>
            <label className="mt-2">Shipping Address</label>
            <textarea type="shipping-address" className="form-control" onChange={this.handleShipping}></textarea>
            <div className="for-check ml-3 mt-3">
              <input type="checkbox" className="form-check-input" id="check"></input>
              <label className="form-check-label" htmlFor="check"><b>I understand to not use my personal information at checkout</b></label>
            </div>
            <button className="btn btn-info mt-5" onClick={() => this.props.onRender('catalog', {})}>Continue Shopping</button>{button}
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
