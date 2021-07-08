const express = require('express')
const bodyParser = require('body-parser') 

const routerIndex = require('./routes/index')
const routerCategory = require('./routes/category')

const app = express()

app.use(bodyParser.json())

app.use('/', routerIndex)
app.use('/category', routerCategory)

app.listen(4000, '0.0.0.0', ()=>{
    console.log('server started on port 4000')
})


