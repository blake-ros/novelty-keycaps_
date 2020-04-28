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
      button = <button className="btn btn-primary float-right mt-5 mr-5 disabled" disabled={true}>Place Order</button>;
    } else {
      button = <button type="submit" className="btn btn-primary float-right mt-5 mr-5">Place Order</button>;
    }
    return (
      <div className="container w-50">
        <h1>Checkout</h1>
        <h2 className="text-secondary">Order Total: ${cartTotal}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <div className="row">
              <div className="col">
                <label>Full Name</label>
                <input type="name" className="form-control" onChange={this.handleNameChange}></input>
              </div>
              <div className="col">
                <label>Phone Number</label>
                <input type="number" className="form-control"></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Address 1</label>
                <input type="name" className="form-control"></input>
              </div>
              <div className="col">
                <label>Address 2</label>
                <input type="name" className="form-control"></input>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>City</label>
                <input type="name" className="form-control"></input>
              </div>
              <div className="col-3">
                <label>State</label>
                <select className="form-control" name="state">
                  <option defaultValue hidden></option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="col-3">
                <label>Zip</label>
                <input type="name" className="form-control"></input>
              </div>
            </div>
            <label>Credit Card</label>
            <input type="credit-card" className="form-control" onChange={this.handleCreditCard}></input>
            <label>Shipping Address</label>
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
