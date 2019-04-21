import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import ProductList from '../product/ProductList';
import Details from '../components/Details';
import Cart from '../Cart';
import Default from '../components/Default';

class AuthContainer extends Component {
    
    componentDidMount() {
        if(!this.props.isLogin){
            this.props.history.push('/productlist')
        }
    }
    

    render() {
        return (
            <Switch>
                <Route exact path='/productlist' component={ProductList} />
                <Route path='/details' component={Details} />
                <Route path='/cart' component={Cart} />
                <Route component={Default} />
            </Switch>
        )
    }
}


const mapStateToProps = state => ({
    isLogin: state.Login.isLogin
})
    
export default withRouter(connect(mapStateToProps) (AuthContainer));