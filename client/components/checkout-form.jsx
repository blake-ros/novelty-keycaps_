import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailAddress: '',
      phoneNumber: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      creditCard: '',
      expirationMonth: '',
      expirationYear: '',
      cvv: '',
      formValidation: {
        name: true,
        emailAddress: true,
        phoneNumber: true,
        shippingAddress: true,
        shippingCity: true,
        shippingState: true,
        creditCard: true,
        expirationMonth: true,
        expirationYear: true,
        cvv: true
      }
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
    const cartTotal = this.props.cart.reduce((cur, acc) => cur + acc.totalPrice, 0).toFixed(2) / 100;
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
            <h2 className="text-center">Billing/Shipping</h2>
            <div className="row">
              <div className="col-6">
                <label>Full Name</label>
                <input htmlFor="name" type="text" className={`form-control ${this.state.formValidation.name === false ? 'is-invalid' : ''}`} onChange={this.handleNameChange} maxLength="65"></input>
                {this.state.formValidation.name === false ? <small className="invalid-feedback">Name needs to be more than 5 characters</small> : <small className="d-none"></small>}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label>Email</label>
                <input type="text" className="form-control is-invalid"></input>
                <small className="invalid-feedback">Missing or invalid email address</small>
              </div>
              <div className="col">
                <label>Phone Number</label>
                <input type="number" className="form-control is-invalid"></input>
                <small className="invalid-feedback">Missing or invalid phone number</small>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label>Address 1</label>
                <input type="name" className="form-control is-invalid"></input>
                <small className="invalid-feedback">Minimum of three characters</small>
              </div>
              <div className="col">
                <label>Address 2</label>
                <input type="name" className="form-control"></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <label>City</label>
                <input type="name" className="form-control is-invalid"></input>
                <small className="invalid-feedback">Missing city name</small>
              </div>
              <div className="col-3">
                <label>State</label>
                <select className="form-control is-invalid" name="state">
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
                <small className="invalid-feedback">Select a state</small>
              </div>
              <div className="col-3">
                <label>Zip</label>
                <input type="name" className="form-control is-invalid"></input>
                <small className="invalid-feedback">Missing or invalid zipcode</small>
              </div>
            </div>
            <h2 className="text-center mt-3">Payment Details</h2>
            <div className="row mt-3">
              <div className="col-6">
                <label>Credit Card</label>
                <input type="credit-card" className="form-control is-invalid" onChange={this.handleCreditCard}></input>
                <small className="invalid-feedback">Missing or invalid credit card number</small>
              </div>
              <div className="col-2">
                <label>Month</label>
                <select name="month" className="form-control is-invalid">
                  <option defaultValue hidden></option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <small className="invalid-feedback">Select a month</small>
              </div>
              <div className="col-2">
                <label>Year</label>
                <select name="year" className="form-control is-invalid">
                  <option defaultValue hidden></option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
                <small className="invalid-feedback">Select a year</small>
              </div>
              <div className="col-2">
                <label>CVV</label>
                <input type="text" className="form-control is-invalid"></input>
                <small className="invalid-feedback">Missing or invalid CVV</small>
              </div>
            </div>
            <div className="for-check ml-3 mt-3">
              <input type="checkbox" className="form-check-input" id="check"></input>
              <label className="form-check-label" htmlFor="check"><b>I understand to not use my personal information at checkout</b></label>
            </div>
            <button className="btn btn-info mt-5" onClick={() => this.props.onRender('checkout', {})}>Continue Shopping</button>{button}
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
