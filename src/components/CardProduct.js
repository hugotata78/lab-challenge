import React from 'react'
import {Card, CardMedia,CardContent,Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const CardProduct = ({ title,classes,image,to,price,condition}) => {
    
    return(
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image}/>
            <CardContent>
                <Typography >{title}</Typography>
                <Typography >Precio: {price}</Typography>
                <Typography >Condicion: {
                    condition === 'new' ?
                    condition = 'nuevo':
                    condition === 'used' ?
                    condition = 'usado':
                    condition = condition
                 }
                </Typography>
                <Link to={to}><Typography >Leer más</Typography></Link>
                
            </CardContent>
        </Card>
    )

}

export default withStyles({
    item: {
        width: '600px',
        height:'700',
        margin: '1em',
        boxSizing: 'border-box',
        textAlign:'center',
        fontSize: '12px',
        height: '600px',
        margin: '1em',
        padding:'1em'
    },
    media:{
        margin: '10xp auto',
        padding: '10px',
        maxWidth: '90%',
        height: '450px'
    }
})
(CardProduct)