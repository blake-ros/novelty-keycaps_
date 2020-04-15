import React from 'react';

class Sponsors extends React.Component {
  render(props) {
    return (
      <div className="page-header pt-3">
        <h1 className="text-center testimonial">Sponsors</h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-between align-items-center">
            <div className="col-3"><img src="./images/ducky_thumb.png"></img></div>
            <div className="col-3"><img src="./images/vortex_thumb.png"></img></div>
            <div className="col-3"><img src="./images/varmilo_new2_thumb.png"></img></div>
            <div className="col-3"><img src="./images/leopold_thumb.png"></img></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
