import React, {useState} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import AppNav from './AppNav';



const Home = ()=> {
        const [product,setProduct] = useState('')


    
        return(
            <div className="App">
                <AppNav/>
                <header className="App-header">
                    <h1 className>Bienvenidos a MercadoApp</h1>
                    <img src={process.env.PUBLIC_URL + 'images/ecommerce.jpg'} className='class-img' alt='images'/>
                    
                                      
                </header>
            </div>
        )
    
}

export default Home