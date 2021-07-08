const express = require ('express')


const app = express()


app.get('/',(request, response)=>{
    console.log(`inside get /`)
    console.log(`method = ${request.method}`)
    console.log(`url or path = ${request.url}`)
    response.end('dummy get response')
})

app.post('/',(request, response)=>{
    console.log(`inside post /`)
    console.log(`method = ${request.method}`)
    console.log(`url or path = ${request.url}`)
    response.end('dummy post response')
})

app.listen(4000, '0.0.0.0', () =>{
    console.log(`server started 4000`)
})