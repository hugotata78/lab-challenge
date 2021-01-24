import React, {Component, useEffect} from 'react'
import Description from '../components/Description'
import AppNav from '../components/AppNav'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../redux/actions/actions'

const Product = ()=> {
        const {id} = useParams()
        const dispatch = useDispatch()
        const product = useSelector(state=>state.reducer.product)

        useEffect(()=>{
            dispatch(getProductById(id))
        },[getProductById])
        console.log(id)
        return(
            <div>
                
                {
                    product?
                   
                            
                            <Description 

                                title={product.title} 
                                price = {product.price}
                                quantity = {product.available_quantity}
                                condition = {product.condition}
                                image={product.thumbnail.replace('-I.jpg','-B.jpg')} 
                                city={product.seller_address.city.name}
                                state={product.seller_address.state.name}
                                country={product.seller_address.country.name}
                                link={product.permalink}
                            />
                        
                    
                    :
                    <div>
                        <AppNav/>
                        <h1 className='sin-resultado'>No se puede obtener Información de este Producto</h1>
                    </div>
                }                
            </div>
            
        )
    }


export default Product