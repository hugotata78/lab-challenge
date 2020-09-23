import { Grid } from '@material-ui/core'
import React, {Fragment} from 'react'
import CardProduct from './CardProduct'
import Paginacion from './Paginacion';


const List = ({listaOrdenada,cond})=>{
    let listaFiltrada = null
    if(cond !== ''){
        listaFiltrada = listaOrdenada.filter(l=>{
            return l.condition === cond
        })
    }
    return(
        <Fragment>
            
            <h1>Lista de Productos</h1>
            <Grid container justify='center'>
                {
                    
                        
                        listaFiltrada && listaFiltrada.length ?
                        listaFiltrada.map(d=>{
                            let name = d.title.split(' ').join('-')
                            let img = d.thumbnail.replace('I.jpg','B.jpg')
                            return(
                                <Grid item md={6}>
                                    <CardProduct 
                                        
                                        to ={`/Product/${name}/${d.id}`}
                                        title = {d.title} image={img}
                                        price = {d.price}
                                        condition = {d.condition}
                                        />
                                </Grid>
                            )
                        })
                        :
                        listaOrdenada.map(d=>{
                            let name = d.title.split(' ').join('-')
                            let img = d.thumbnail.replace('I.jpg','B.jpg')
                            return(
                                <Grid item md={6}>
                                    <CardProduct 
                                        to ={`/Product/${name}/${d.id}`} 
                                        title = {d.title} image={img}
                                        price = {d.price}
                                        condition = {d.condition}
                                        />
                                </Grid>
                            )
                        })
                    
                    
                }
              
           </Grid>
           
           
        </Fragment>
    )
}

export default List