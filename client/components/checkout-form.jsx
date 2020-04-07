import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: null,
      shippingAddress: null
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  render(props) {
    const cartTotal = this.props.cart.reduce((cur, acc) => cur + acc.price, 0).toFixed(2) / 100;
    let button;
    if (!this.state.name || !this.state.shippingAddress || !this.state.creditCard) {
      button = <button className="invisible"></button>;
    } else {
      button = <button type="submit" className="btn btn-primary float-right mt-5 mr-5">Place Order</button>;
    }
    return (
      <div className="container-fluid">
        <h1>Checkout</h1>
        <h2 className="text-secondary">Order Total: ${cartTotal}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label>Name</label>
            <input type="name" className="form-control" onChange={this.handleNameChange}></input>
            <label>Credit Card</label>
            <input type="credit-card" className="form-control" onChange={this.handleCreditCard}></input>
            <label>Shipping Address</label>
            <textarea type="shipping-address" className="form-control" onChange={this.handleShipping}></textarea>
            <button className="btn btn-info mt-5" onClick={() => this.props.onRender('catalog', {})}>Continue Shopping</button>{button}
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
