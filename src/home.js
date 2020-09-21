import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {

    componentDidMount(){
        axios.get('https://api.mercadolibre.com/sites/MLA/search?q=samsung')
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    render(){
        return(
            <div>
                <h1>Api Mercado libre</h1>
            </div>
        )
    }
}

export default Home