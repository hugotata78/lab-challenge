import React, {useState} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import AppNav from './AppNav';



const Home = ()=> {
        const [product,setProduct] = useState('')


    
        return(
            <div className="App">
                <AppNav/>
                <header className="App-header">
                    <img src={process.env.PUBLIC_URL + 'images/ecommerce.jpg'} className='class-img' alt='images'/>
                   <h1 className>Bienvenidos a MercadoApp</h1>
                                      
                </header>
            </div>
        )
    
}

export default Home