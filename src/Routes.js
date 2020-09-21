import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './containers/Products'
import Product from './containers/Product'

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/Products/:product' component={Products}/>
            <Route exact path = '/Product-Info/:title/:id' component={Product}/>
        </Switch>
    )
}

export default Routes