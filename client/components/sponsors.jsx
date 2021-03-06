import React from 'react';

class Sponsors extends React.Component {
  render(props) {
    return (
      <div className="page-header pt-3 sponsorsBackground">
        <h1 className="text-center testimonial">Sponsors</h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-between align-items-center">
            <div className="col-3"><img src="./images/ducky_thumb.png"></img></div>
            <div className="col-3"><img src="./images/vortex_thumb.png"></img></div>
            <div className="col-3"><img src="./images/varmilo_new2_thumb.png"></img></div>
            <div className="col-3"><img src="./images/leopold_thumb.png"></img></div>
          </div>
        </div>
        <h1 className="page-header text-right testimonial pt-3 pb-3 mr-4">Built by Blake Ros &copy;</h1>
      </div>
    );
  }
}

export default Sponsors;
