import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './containers/Products'
import Catalogue from './containers/Catalogue'
import Product from './containers/Product'



const Routes = ()=>{
    return(

        <div>
            <Switch>
               <Route exact path = '/' component={Home}/>
               <Route path = '/Catalogue' component={Catalogue}/>
               <Route path = '/search/:query' component={Products}/>
               <Route path = '/items/:id' component={Product}/>
                    
            
            </Switch>
        </div>
    )
}

export default Routes