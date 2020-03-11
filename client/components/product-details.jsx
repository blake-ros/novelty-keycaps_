import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.newState}`)
      .then(response => {
        response.json();
      })
      .then(product => this.setState({ product }))
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state);
    const myProduct = this.state.product;
    return (
      <div className="container-fluid">
        <p onClick={() => this.props.setView('catalog', {})}> &lt; Back to Catalog</p>
        <div className="card">
          <div className="row">
            <img className="col-6" src={myProduct.image} alt="product image"></img>
            <div className="col-6">
              <div className="card-body">
                <h1 className="mb-3">{myProduct.name}</h1>
                <span className="mb-3">{this.props.price}</span>
                <p>{myProduct.shortDescription}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <p>{this.props.longDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
