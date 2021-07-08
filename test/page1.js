const http = require('http')

//console.log(http.METHODS)

//console.log(http.STATUS_CODES)

const server = http.createServer((request, response)=>{
    console.log(`server has recieved a req`)
    //process request


    //send response to the client
    response.end('hello world')

})

//start server process on a port
//internally starts a socket
server.listen(4000, '0.0.0.0',()=>{
    console.log('server started on port 4000')
})