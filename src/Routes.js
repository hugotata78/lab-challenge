import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './containers/Products'
import Product from './containers/Product'
import Description from './components/Description'

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/Product/:url' component={Product}/>
            <Route path = '/Products/:product' component={Products}/>
            
            
        </Switch>
    )
}

export default Routes