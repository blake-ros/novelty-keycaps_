import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      showModal: {
        show: false,
        displayNone: true
      }
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    if (this.state.showModal.show) {
      this.setState({
        showModal: {
          show: false,
          displayNone: false
        }
      });
      setTimeout(() => {
        this.setState({
          showModal: {
            show: false,
            displayNone: true
          }
        });
      });
    } else {
      this.setState({
        showModal: {
          show: true,
          displayNone: false
        }
      });
    }
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
    const myProduct = this.state.product;

    if (!this.state.product) {
      return null;
    }
    return (
      <div className="container-fluid">
        <button className="btn btn-info mb-3" onClick={() => this.props.onRender('catalog', {})}>Back to Catalog</button>
        <div className="card">
          <div className="row">
            <img className="col-xl-6 col-lg-5 col-md-6 col-xs-12 col-sm-6" src={myProduct.image} alt="product image"></img>
            <div className="col-xl-6 col-lg-5 col-md-6 col-xs-12 col-sm-6">
              <div className="card-body">
                <h1 className="mb-3">{myProduct.name}</h1>
                <span className="mb-3 text-secondary">${(myProduct.price * 0.01).toFixed(2)}</span>
                <p>{myProduct.shortDescription}</p>
                <button className="btn btn-primary pl-3 pr-3 pt-2 pb-2" onClick={() => {
                  this.props.addToCart(myProduct, '+');
                  this.toggleModal();
                }}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="row">
            <p className="pl-4 pr-4 mt-3 col-12">{myProduct.longDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
