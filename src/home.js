import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import Compare from './components/Compare'
import ProductList from './components/CarsList'
import * as productActions from './redux/action'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const {products, actions} = this.props
    const compareProducts = products.filter(product => product.compare)

    return (
      <div className="home mt-5">
        <h1 className="text-center">Car Comparison Tool</h1>
        <ProductList products={products} compare={actions.compare}/>
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
