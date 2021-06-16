const http = require('http')

const server = http.createServer((req,res)=>{
 if(req.url ==="/"){
     res.end("Welcome to the homepage")
 }
 if(req.url ==="/about"){
    res.end("This is our short history")
}
res.end(`
<h1> Opps </h1> 
<p> This is not the page you are looking for </p>
<a href="/"> Back home </a>
`)   


})


server.listen(5000)