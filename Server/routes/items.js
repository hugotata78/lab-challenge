const express = require('express')
const axios = require('axios')
const router = express.Router()


router.get('/:id', (req,res)=>{
    
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
    .then(result=>{
        //console.log(result.data)
        res.json(result.data)
    })
    .catch(err=>{
        console.log(err)
    })
    
})

module.exports = router;