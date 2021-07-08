const express = require('express')

const router = express.Router()

router.get('/',(request,response)=>{
    console.log('inside GET /')
    response.end('GET /')
})

module.exports = router