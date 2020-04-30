import React from 'react';

class OrderConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.changeToHome = this.changeToHome.bind(this);
  }

  changeToHome(event) {
    event.preventDefault();
    this.props.onRender('catalog', {});
  }

  render() {
    return (
      <div className="position-fixed h-100 w-100 overlay d-flex">
        <div className="m-auto p-3">
          <div className="bg-white rounded p-3 modal-message">
            <div className="mt-2">
              <h3 className="text-center">Thank you!!!</h3>
            </div>
            <div className="mt-3">
              <div>You have successfully placed your order. Thank you for interacting with the NovelKeycaps_ Demo</div>
            </div>
            <div className="d-flex justify-content-around mt-4">
              <button className="btn btn-primary" onClick={this.changeToHome}>Home</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderConfirmation;
