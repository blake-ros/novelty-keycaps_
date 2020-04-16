import React from 'react';

function InitialModal(props) {
  return (
    <div className={`position-fixed h-100 w-100 overlay ${props.showInitialModal.displayNone ? 'd-none' : 'd-flex'} ${props.showInitialModal.show ? 'fade-in' : 'fade-out'}`}>
      <div className="m-auto p-3">
        <div className={`bg-white rounded p-3 modal-message ${props.showIntitialModal ? 'slide-in' : 'slide-out'}`}>
          <h5 className="text-center">Novelty Keycaps_ Demo</h5>
          <div className="d-flex">
          </div>
          <p className="text-center">Welcome to my e-commerce webpage Novelty Keycaps_ this website is a demo and no real purchases will be made. Please refrain from using your personal information at checkout!</p>
          <div className="text-center">
            <button className="btn btn-primary"
              onClick={() => props.toggleInitialModal()}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialModal;
