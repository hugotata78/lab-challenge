import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './containers/Products'
import Catalogue from './containers/Catalogue'
import Product from './containers/Product'



const Routes = ()=>{
    return(
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/Catalogue' component={Catalogue}/>
            <Route path = '/Products/:product' component={Products}/>
            <Route path = '/Product/:name/:id' component={Product}/>
                    
            
        </Switch>
    )
}

export default Routes