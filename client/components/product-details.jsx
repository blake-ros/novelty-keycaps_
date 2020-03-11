import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.newState.productId}`)
      .then(response => {
        return response.json();
      })
      .then(product => this.setState({ product }))
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state.product);
    const myProduct = this.state.product;
    console.log(myProduct);
    if (!this.state.product) {
      return null;
    }
    return (
      <div className="container-fluid">
        <button onClick={() => this.props.onRender('catalog', {})}> &lt; Back to Catalog</button>
        <div className="card">
          <div className="row">
            <img className="col-6" src={myProduct.image} alt="product image"></img>
            <div className="col-6">
              <div className="card-body">
                <h1 className="mb-3">{myProduct.name}</h1>
                <span className="mb-3">{myProduct.price}</span>
                <p>{myProduct.shortDescription}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <p>{myProduct.longDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
