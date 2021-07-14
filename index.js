const dotenv = require('dotenv');
const http = require('http');

dotenv.config();

const server = http.createServer((req,res) => {
    if(req.url === '/first'){
        res.write("First response from Node Backend!");
        res.statusCode = 200;
        res.end();
    }
    else{
        res.write("wrong API called!");
        res.statusCode = 404;
        res.end();
    }
});

server.listen(process.env.PORT);