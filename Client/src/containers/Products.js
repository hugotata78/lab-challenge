import React, {useState, useEffect} from 'react'
import List from '../components/List'
import axios from 'axios'
import AppNav from '../components/AppNav'
//import Pagination from "react-js-pagination";
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'
import Paginacion from '../components/Paginacion';
import { Combobox } from 'react-widgets'
import './Products.css'
import { useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../redux/actions/actions';
import { useHistory, useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';




const Products = ()=>{
    
    //const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    
    const products = useSelector(state=>state.reducer.products)
    const loading = useSelector(state=>state.reducer.loading)
    const error = useSelector(state=>state.reducer.error)
    const {query} = useParams()
    
    console.log(query)
    useEffect(()=>{
        dispatch(getProducts(query))
          
    },[getProducts])
    console.log(products)
    return(
        <div>
            <AppNav/>
            {loading && <h3>Buscando...</h3>}
            {products&& <List products={products}/>} 
            {error && <h3>{error}</h3>}
        </div>
    )
    
}

export default Products