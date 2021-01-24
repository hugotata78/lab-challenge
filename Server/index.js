const express = require ('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded( {extended: false}))
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})

app.use('/api/search', require('./routes/products'))
app.use('/api/items', require('./routes/items'))


app.listen(3001,()=>{
    console.log('Servidor corriendo en el puerto 3001')
})