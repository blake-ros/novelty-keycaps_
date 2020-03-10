import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({
        products: data
      }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const myProducts = this.state.products.map(product => {
      const newNumber = product.price / 100;
      const newerNumber = Number(newNumber).toFixed(2);
      return <ProductListItem key={product.productId} image={product.image} name={product.name} price={newerNumber} shortDescription={product.shortDescription}/>;
    });

    return (
      <div className="container-fluid d-flex flex-wrap justify-content-center">{myProducts}</div>
    );
  }
}

export default ProductList;
