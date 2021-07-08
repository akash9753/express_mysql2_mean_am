const express = require('express')

const app = express()

const routercategory = require('./routes/category')

app.use('/category',routercategory)

app.listen(4000, '0.0.0.0',()=>{
    console.log(`server started on port 4000`)
})