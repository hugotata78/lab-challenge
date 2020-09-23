import React, {Component, Fragment} from 'react'
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



class Products extends Component{
    
        
            state = {
                data : [],
                offset: 0,
                limit: 20,
                fragment: 0,
                fragmentData: [],
                page: 0,
                cond: ''
                          
            }
            
          
    
    
    componentDidMount(){
        this.getInfo()
    }
    
    getInfo = () =>{
        const {match} = this.props
        const {product} = match.params
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
        .then(res=>{
            const {results} = res.data
            
            this.setState({
                data : results,
                fragment: Math.ceil(results.length / this.state.limit),
                fragmentData: results.slice(this.state.offset,this.state.offset + this.state.limit) 
            })
        })
        .catch(err=>console.log(err))
    }
    
    
    handleChange = (event, value) => {
        const selected = value - 1
        const o = selected * this.state.limit
        this.setState({
            page: selected,
            offset: o
        });
        this.getInfo()
      };
      
    render(){
        
        const {data,fragmentData,fragment,page} = this.state
        const listaOrdenada = fragmentData.sort((a,b)=>{
            return b.price - a.price
        })
        
        const condictions =[...Array.from(new Set( listaOrdenada.map(c=>{
            
            return c.condition
        })))]
        
        
        
        return(
            <Fragment>
                <AppNav/>
                {
                    condictions.length > 1 ?
                    <div className='content-select'>
                      <select onChange={(e)=>{
                          if(e.target.value !== ''){
                            let long = listaOrdenada.filter(l=>{
                                return l.condition === e.target.value
                            })
                            
                            this.setState({
                                cond: e.target.value,
                                fragment: Math.ceil(long.length / this.state.limit),
                            })
                            
                          }
                      }}>
                          <option value="" selected>Filtrar por Condicion</option>
                          {
                              condictions.map(c=>{
                                 return <option value={c}>{
                                            c === 'new' ?
                                            c = 'nuevo':
                                            c === 'used'?
                                            c = 'usado':
                                            c = 'otros'
                                        }
                                        </option>
                              })
                          }
                      </select>
                    </div>
                   :
                   condictions.length === 1 ?
                   <Typography className='sin-resultado' variant='h6' content='p'>Esta categoria No puede ser filtrada por tener una única condicion</Typography>
                   :
                   <p></p>
                }
                {
                    listaOrdenada.length?
                    <>
                        <List listaOrdenada={listaOrdenada} cond={this.state.cond}/>
                        <Pagination count={fragment} page={page} onChange={this.handleChange} />
                    </> 
                    :
                    <h1 className='sin-resultado'>No se encontraron productos relacionados con la busqueda solicitada</h1>
                }
                
                
                
            </Fragment>
        )
    }    
}

export default Products