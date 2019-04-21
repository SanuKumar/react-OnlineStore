import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import Title from '../components/Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../Context';

class ProductList extends Component {
  state = {
    product: storeProducts
  }


  componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products'/>

            <div className='row'>
            <ProductConsumer>
              {value => {
                return value.products.map( product => {
                  return <Product key={product.id} product={product} />
                })
              }}
            </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLogin : state.Login.isLogin
})


export default connect(mapStateToProps)(ProductList);