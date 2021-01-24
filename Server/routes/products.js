const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', (req,res)=>{
    
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then(result=>{
        res.json(result.data.results)
    })
    .catch(err=>{
        console.log(err)
    })
    
})


module.exports = router;