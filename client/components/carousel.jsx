import React from 'react';

class Carousel extends React.Component {

  render() {
    return (
      <div id="carousel-captions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-captions" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-captions" data-slide-to="1"></li>
          <li data-target="#carousel-captions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner position-relative">
          <div className="carousel-item active" data-interval="5000">
            <div className="h-100 w-100 carousel-slide slide-1" />
            <div className="carousel-caption d-md-block center-caption">
              <h3>Top Quality Keycap Supplies</h3>
              <p>We take pride in only stocking the best products</p>
            </div>
          </div>
          <div className="carousel-item" data-interval="5000">
            <div className="h-100 w-100 carousel-slide slide-2" />
            <img src="./images/carousel-image-2.jpg" className="d-block w-100 carousel-image" />
            <div className="carousel-caption d-md-block center-caption">
              <h3>Vendors You Trust</h3>
              <p>At Novelty Keycaps_ we only carry the best brands.</p>
            </div>
          </div>
          <div className="carousel-item" data-interval="5000">
            <div className="h-100 w-100 carousel-slide slide-3" />
            <div className="carousel-caption d-md-block center-caption">
              <h3>Products That Last</h3>
              <p>We garantee that our products will satisfy your need to give your keyboard life.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-next carousel-controls" href="#carousel-captions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
