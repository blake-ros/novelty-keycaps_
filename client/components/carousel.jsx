import React from 'react';

class Carousel extends React.Component {

  // <div id="carousel-component" className="carousel slide" data-ride="carousel">
  //   <ol className="carousel-indicators">
  //     <li data-target="#carousel-component" data-slide-to="0" className="active"></li>
  //     <li data-target="#carousel-component" data-slide-to="1"></li>
  //     <li data-target="#carousel-component" data-slide-to="2"></li>
  //   </ol>
  //   <div className="carousel-inner">
  //     <div className="carousel-item active" data-interval="5000">
  //       <img className="d-block w-100 carousel-slide slide-1" src="./images/carousel-image-wicked.jpg" alt="First slide"></img>
  //     </div>
  //     <div className="carousel-item" data-interval="5000">
  //       <img className="d-block w-100 carousel-slide slide-2" src="./images/carousel-image-2.jpg" alt="Second slide"></img>
  //     </div>
  //     <div className="carousel-item" data-interval="5000">
  //       <img className="d-block w-100 carousel-slide slide-3" src="./images/carousel-image-3.png" alt="Third slide"></img>
  //     </div>
  //   </div>
  //   <a className="carousel-control-prev" href="#carousel-component" role="button" data-slide="prev">
  //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span className="sr-only">Previous</span>
  //   </a>
  //   <a className="carousel-control-next" href="#carousel-component" role="button" data-slide="next">
  //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span className="sr-only">Next</span>
  //   </a>
  // </div>
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000">
            <img className="d-block w-100" src="./images/carousel-image-wicked.jpg" alt="First slide" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img className="d-block w-100" src="./images/carousel-image-3.png" alt="Second slide" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img className="d-block w-100" src="./images/carousel-image-2.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
