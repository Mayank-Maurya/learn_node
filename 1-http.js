const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('welcome to home page')
    }
    if(req.url === '/about')
    {
        res.end('this is about page')
    }
    res.end(
        `<h1> OOps!</h1>
        <a href="/">back home</a>`
    )
})

server.listen(5000)