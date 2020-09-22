import React, {Component} from 'react'
import Description from '../components/Description'
import axios from 'axios'

class Product extends Component{
    state = {
        data: []
    }
    componentDidMount(){
        var url = window.location.href
        console.log(url)
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${url}`)
        .then(res=>{
            const {results} = res.data
            
            this.setState({
                data : results
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
                    data.map(d=>{
                        return(
                            <Description 

                                title={d.title} 
                                price = {d.price}
                                quantity = {d.available_quantity}
                                condition = {d.condition}
                                image={d.thumbnail} 
                                city={d.seller_address.city.name} 
                                state={d.seller_address.state.name}
                                
                                country={d.seller_address.country.name}
                                link = {d.seller.permalink}
                            />
                        )
                    })
                }                
            </div>
            
        )
    }
}

export default Product