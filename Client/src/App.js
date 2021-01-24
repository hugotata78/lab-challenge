import React from 'react';
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './redux/store';
//import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {Switch, Route, useHistory } from 'react-router-dom'
import AppNav from './components/AppNav';
import Home from './components/Home';
import Catalogue from './containers/Catalogue';
import Products from './containers/Products';
import Product from './containers/Product';

function App() {
  
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
