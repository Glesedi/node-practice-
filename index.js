const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    res.setHeader('content-type', 'text/html')

    let path = './docs/';
    switch(req.url){
         case '/':
         path += 'index.html'
        break;
         case '/about':
         path += 'about.html'
        break;
          case '/contact-me':
        path += 'contact-me.html'
        break;
         default:
         path += '404.html'
        break;

    }


    


fs.readFile(path, (err , data) => {
    if (err){
        console.log(err);
        res.writeHead(404);
        res.end('files not found');
    }
    else{
        res.writeHead(200);
        res.end(data);
    }
})
});

server.listen(3000, () => {
    console.log('server running on port 3000');
});


