import React, {Component} from 'react'
import Description from '../components/Description'
import AppNav from '../components/AppNav'
import axios from 'axios'

class Product extends Component{
    state = {
        data: []
    }
    componentDidMount(){
        
        
        const match = this.props.match
        const { name,id } = match.params
        
        const nameProduct = name.split('-').join(' ')
        console.log(id)
        
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${nameProduct}`)
        .then(res=>{
            const {results} = res.data
            
            this.setState({
                data : results.filter(r=>{
                    return r.id === id
                })
            })
        })
        .catch(err=>console.log(err))
    }
    
    
    render(){
        
        const {data} = this.state
        console.log(data)
        return(
            <div>
                
                {
                    data && data.length ?
                    data.map(d=>{
                        let img = d.thumbnail.replace('I.jpg','B.jpg')
                        return(
                            <Description 

                                title={d.title} 
                                price = {d.price}
                                quantity = {d.available_quantity}
                                condition = {d.condition}
                                image={img} 
                                city={d.seller_address.city.name} 
                                state={d.seller_address.state.name}
                                
                                country={d.seller_address.country.name}
                                link = {d.seller.permalink}
                            />
                        )
                    })
                    :
                    <div>
                        <AppNav/>
                        <h1 className='sin-resultado'>No se puede obtener Información de esta Producto</h1>
                    </div>
                }                
            </div>
            
        )
    }
}

export default Product