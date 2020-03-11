import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list';
import ProductDetails from './product-details.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: { name: 'catalog', params: {} }
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  render() {
    const myState = this.state.view;
    let conditionalRender;

    if (myState.name === 'details') {
      conditionalRender = <ProductDetails newState={myState.params} onRender={this.setView}/>;
    } else if (myState.name === 'catalog') {
      conditionalRender = <ProductList onRender={this.setView} />;
    }
    console.log(this.props.newState);
    return (
      <div>
        <Header />,
        {conditionalRender}
      </div>
    );
  }
}
