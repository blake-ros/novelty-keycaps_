import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      creditCard: null
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Checkout</h1>
        <div>{order.total}</div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="name" className="form-control"></input>
            <label>Credit Card</label>
            <input type="credit-card" className="form-control"></input>
            <label>Shipping Address</label>
            <input type="shipping-address" className="form-control"></input>
            <button onClick={() => this.props.onRender('catalog', {})}> &lt; Continue Shopping</button><button className="btn btn-primary float-right">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
