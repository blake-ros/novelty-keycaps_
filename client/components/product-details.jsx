import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount(productsId) {
    fetch(`/api/products/:${productsId}`)
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({
        product: data
      }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid">
        <div className="row">
          <img className="col-6" src={this.props.img} alt="product image"></img>
          <div className="col-6">
            <div className="card-body">
              <h1 className="mb-3">{this.props.name}</h1>
              <span className="mb-3">{this.props.price}</span>
              <p>{this.props.shortDescription}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <p>{this.props.longDescription}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
