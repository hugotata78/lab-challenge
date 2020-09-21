import React, {Component} from 'react'
import Description from '../components/Description'
import axios from 'axios'

class Product extends Component{
    state = {
        data: []
    }
    componentDidMount(){
        const { match } = this.props
        const title = encodeURIComponent(match.params.title )
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${title}`)
        .then(res=>{
            const d = res.data.results
            console.log(d)
            this.setState({
                data : d
            })
        })
        .catch(err=>console.log(err))
    }
    
    
    render(){
        const { match } = this.props
        const id = match.params.id
        const {data} = this.state
        const dt = data.filter(d=>{
           return d.id == id
        })

        return(
            <div>
                {
                    dt.map(d=>{
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