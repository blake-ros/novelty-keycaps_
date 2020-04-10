import React from 'react';

class AddToCartModal extends React.Component {
  render(props) {

    return (
      <div className={`position-fixed h-100 w-100 ${props.showModal.displayNone ? 'd-none' : 'd-flex'} overlay ${props.showModal.show ? 'fade-in' : 'fade-out'}`}>
        <div className="m-auto p-4">
          <div className={`bg-white rounded p-3 modal-message ${props.showModal.show ? 'slide-in' : 'slide-out'}`}>
            <div className="d-flex">
              <i className="far fa-times-circle cancel-button ml-auto"
                onClick={props.toggleModal} />
            </div>
            <h5 className="text-center">New Item Added</h5>
            <p className="text-center">This item is now in your cart.</p>
            <div className="btn-group w-100">
              <button className="btn btn-secondary w-50" onClick={() => props.setView('catalog', {})}>Continue Shopping</button>
              <button className="btn btn-primary text-white w-50" onClick={() => props.setView('cart', {})}>View Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddToCartModal;
