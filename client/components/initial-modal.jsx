import React from 'react';

class InitialModal extends React.Component {
  render() {
    return (
      <div className={`position-fixed h-100 w-100 overlay ${props.showInitialModal.displayNone ? 'd-none' : 'd-flex'} ${props.showInitialModal.show ? 'fade-in' : 'fade-out'}`}>Stuff Here</div>
        <div className="m-auto p-3">
          <div className={`bg-white rounded p-3 modal-message ${props.showInitialModal.show ? 'slide-in' : 'slide-out'}`}>
            <h5 className="text-center">Novelty Keycaps_</h5>
            <div className="d-flex"></div>
            <p className="text-center">This is full stack content management application that is only mean to demonstrate my abilities as a developer. Please refrain from using any personal information on this website.</p>
            <button className="btn btn-primary" onClick={() => this.props.toggleInitialModal()}>Continue</button>
          </div>
        </div>
    );
  }
}
export default InitialModal;
