import React from 'react';

function InitialModal(props) {
  console.log(props);
  console.log(props.showInitialModal.show);
  return (
    <div className={`position-fixed h-100 w-100 overlay ${props.showInitialModal.displayNone ? 'd-none' : 'd-flex'} ${props.showInitialModal.show ? 'fade-in' : 'fade-out'}`}>
      <div className="m-auto p-3">
        <div className={`bg-white rounded p-3 modal-message ${props.showIntitialModal ? 'slide-in' : 'slide-out'}`}>
          <h5 className="text-center">Novelty Keycaps_ Demo</h5>
          <div className="d-flex">
          </div>
          <p className="text-center">Welcome to my e-commerce webpage Novelty Keycaps_ this website is a demo and no real purchases will be made. Please refrain from using your personal information!</p>
          <div className="btn-group w-100">
            <button className="btn btn-danger w-100"
              onClick={() => props.toggleInitialModal()}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialModal;
