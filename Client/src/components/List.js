import { Grid } from '@material-ui/core'
import React, {Fragment} from 'react'
import CardProduct from './CardProduct'
import Paginacion from './Paginacion';


const List = ({products})=>{
    
    return(
        <Fragment>
            
            <h1>Lista de Productos</h1>
            <Grid container justify='center'>
                {
                    
                        
                    products && products.length ?
                        products.map(d=>{
                            
                            
                            return(
                                <Grid item md={6}>
                                    <CardProduct 
                                        
                                        to ={`/items/${d.id}`}
                                        title = {d.title} image={d.thumbnail.replace('I.jpg','B.jpg')}
                                        price = {d.price}
                                        condition = {d.condition}
                                        />
                                </Grid>
                            )
                        })
                        :
                        <h3>No existen resultados de la busqueda</h3>
                    
                    
                }
              
           </Grid>
           
           
        </Fragment>
    )
}

export default List