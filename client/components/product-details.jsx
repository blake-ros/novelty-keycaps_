import React from 'react';
import AddToCartModal from './add-to-cart-modal';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      quantity: 1,
      showModal: {
        show: false,
        displayNone: true
      }
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.quantityChange = this.quantityChange.bind(this);
    this.incrementItem = this.incrementItem.bind(this);
    this.decrementItem = this.decrementItem.bind(this);
    this.blurQuantity = this.blurQuantity.bind(this);
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

  decrementItem(event) {
    let quantity = this.state.quantity;
    if (quantity === 1) {
      return null;
    } else {
      this.setState({
        quantity: --quantity
      });
    }
  }

  incrementItem(event) {
    let quantity = this.state.quantity;
    this.setState({
      quantity: ++quantity
    });
  }

  quantityChange(event) {
    this.setState({
      quantity: parseInt(event.currentTarget.value)
    });
  }

  addProductQuantity() {

  }

  blurQuantity(event) {
    if (this.state.quantity === 0) {
      this.setState({
        quantity: 1
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

  render(props) {
    const myProduct = this.state.product;
    const myQuantity = this.state.quantity;
    console.log(myQuantity);

    if (!this.state.product) {
      return null;
    }
    return (
      <div className="container-fluid">
        <button className="btn btn-info mb-3 mt-3" onClick={() => this.props.onRender('catalog', {})}>Back to Catalog</button>
        <div className="card">
          <div className="row">
            <img className="col-xl-6 col-lg-5 col-md-6 col-xs-12 col-sm-6" src={myProduct.image} alt="product image"></img>
            <div className="col-xl-6 col-lg-5 col-md-6 col-xs-12 col-sm-6">
              <div className="card-body">
                <h1 className="mb-3">{myProduct.name}</h1>
                <span className="mb-3 text-secondary">${(myProduct.price * 0.01).toFixed(2)}</span>
                <p>{myProduct.shortDescription}</p>
                <p className="mt-5">Quantity:</p>
                <div className="d-flex justify-content-start">
                  <div className="d-flex align-items-center justify-content-center quantityStyle" onClick={this.decrementItem}>
                    <i className="fas fa-minus"></i>
                  </div>
                  <input type="number" className="text-center justify-content-center inputBox" onChange={this.quantityChange} value={this.state.quantity} onBlur={this.blurQuantity} readOnly/>
                  <div className="d-flex align-items-center justify-content-center quantityStyle" onClick={this.incrementItem}>
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
                <button className="btn btn-primary pl-3 pr-3 pt-2 pb-2 mt-3" onClick={() => {
                  this.props.addToCart(myProduct, myQuantity);
                  this.toggleModal();
                }}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="row">
            <p className="pl-4 pr-4 mt-3 col-12">{myProduct.longDescription}</p>
          </div>
        </div>
        <AddToCartModal showModal={this.state.showModal}
          newView={this.props.onRender}
          toggleModal={this.toggleModal}
          product={this.state.product} />
      </div>
    );
  }
}

export default ProductDetails;
