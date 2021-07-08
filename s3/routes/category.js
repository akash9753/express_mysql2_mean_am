const express = require('express')

const router = express.Router()

const categories = [
    {id:1, title:'c1'},
    {id:2, title:'c2'},
    {id:3, title:'c3'},
]

router.get('/',(request,response)=>{
    console.log('inside GET category /')
    response.send(categories)
})

router.post('/',(request,response)=>{
    const {id,title} = request.body
    categories.push({
        id:id,
        title:title
    })
    console.log('inside POST category /')
    response.send('post / category')
})

module.exports = router