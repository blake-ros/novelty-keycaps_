import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list';
import ProductDetails from './product-details.jsx';
import CartSummary from './cart-summary.jsx';
import CheckoutForm from './checkout-form.jsx';
import Sponsors from './sponsors.jsx';
import Carousel from './carousel.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: { name: 'catalog', params: {} },
      cart: [],
      showInitialModal: {
        show: true,
        displayNone: false
      },
      fadeOut: false
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.toggleInitialModal = this.toggleInitialModal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));

    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cart: data
        });
      });
  }

  addToCart(product, quantity) {
    const thisQuantity = quantity;
    const thisProductId = product.productId;
    let duplicate = false;
    const cart = this.state.cart;

    event.preventDefault();
    const productQuantity = { quantity: thisQuantity };

    const theProductWithQuantity = { ...product, ...productQuantity };

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId === thisProductId) {
        duplicate = true;
        const newQuantity = cart[i].quantity + thisQuantity;
        const newTotal = cart[i].totalPrice + (product.price * quantity);

        const updateProduct = {
          productId: thisProductId,
          quantity: newQuantity,
          totalPrice: newTotal
        };

        fetch('/api/cart', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateProduct)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            cart[i] = { ...cart[i], ...data };
            this.setState({
              cart
            });
          });
      }
    }

    if (duplicate === false) {
      fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(theProductWithQuantity)
      })
        .then(response => response.json())
        .then(data => {
          const myCart = this.state.cart;
          this.setState({
            cart: myCart.concat(data)
          });
        });
    }
  }

  placeOrder(orderObj) {
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderObj)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cart: [],
          view: { name: 'catalog', params: {} }
        });
      });
  }

  toggleInitialModal() {
    this.setState({
      showInitialModal: {
        show: false,
        displayNone: false
      }
    });
    setTimeout(() => {
      this.setState({
        showInitialModal: {
          show: false,
          displayNone: true
        }
      });
    }, 750);
  }

  removeItem(cartItemId) {

    function filterCart(cart) {
      return cart.cartItemId !== cartItemId;
    }

    fetch(`/api/cart/${cartItemId}`, {
      method: 'DELETE'
    })
      .then(response => {
        return response;
      })
      .then(data => {
        this.setState({
          cart: this.state.cart.filter(filterCart)
        });
      });
  }

  render() {
    const cart = this.state.cart;
    const cartQuantity = cart.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);

    const myState = this.state.view;
    let conditionalRender;
    if (myState.name === 'details') {
      conditionalRender = <ProductDetails newState={myState.params} onRender={this.setView} addToCart={this.addToCart} id={this.state.view.params}/>;
    } else if (myState.name === 'catalog') {
      conditionalRender = <ProductList onRender={this.setView} toggleInitialModal={this.toggleInitialModal} showInitialModal={this.state.showInitialModal} />;
    } else if (myState.name === 'cart') {
      conditionalRender = <CartSummary onRender={this.setView} newState={myState.params} cart={this.state.cart} removeItem={this.removeItem} addtoCart={this.props.addToCart} />;
    } else if (myState.name === 'checkout') {
      conditionalRender = <CheckoutForm onRender={this.setView} newState={myState.params} cart={this.state.cart} form={this.placeOrder}/>;
    }

    let carouselRender;
    if (myState.name !== 'catalog') {
      carouselRender = <div className="d-none"></div>;
    } else {
      carouselRender = <Carousel />;
    }

    return (
      <div>
        <Header cartItemCount={cartQuantity} onRender={this.setView} showInitialModal={this.state.showInitialModal} toggleInitialModal={this.toggleInitialModal} />
        {carouselRender}
        {conditionalRender}
        <Sponsors />
      </div>
    );
  }
}
