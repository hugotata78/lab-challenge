
import React from 'react'
import {Card, CardMedia,CardContent,Typography,Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import AppNav from './AppNav'



const Description = ({ title,price,quantity,condition, classes,image,city,state,country,link}) =>{
    return(
        <div>
            <AppNav/>
            <Card className={classes.item}>
                <CardMedia className={classes.media} image={image}/>
                <CardContent>
                    <Typography variant='h6' component='p'>{title}</Typography>
                    <Typography >Precio: ${price}</Typography>
                    <Typography >Cantidad: {quantity}</Typography>
                    <Typography >Estado: {
                        condition === 'new'?
                        condition = 'nuevo'
                        :
                        condition === 'used'?
                        condition = 'usado'
                        :
                        condition = condition
                    }</Typography>
                    <hr/>
                    <Typography variant='h6' component='p'>Datos del Vendedor: </Typography>
                    <Typography >Ciudad: {city}</Typography>
                    <Typography >Provincia: {state}</Typography>
                    <Typography >Pais: {country}</Typography>
                    <Button size="small" color="primary">
                        <a href={link}>Ver Perfil Mercado Libre</a>
                    </Button>
                    
                </CardContent>
            </Card>
        </div>
    )

}

export default withStyles({
    item: {
        width: '600px',
        height:'900px',
        margin: '1em',
        boxSizing: 'border-box',
        textAlign:'left',
        fontSize: '12px',
       
        margin: '70px auto',
        padding:'1em'
    },
    media:{
        margin: '10xp auto',
        padding: '10px',
        width:'90%',
        height: '500px'
    }
}) (Description)