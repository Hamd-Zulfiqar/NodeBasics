const dotenv = require('dotenv');
const http = require('http');
const axios = require('axios');

dotenv.config();

const getTodo = async () => {
    try{
        var data = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log("API hit successful!!!\n");
        return data;
    }
    catch(e){
        console.log("API hit FAILED!!!\n");
    }
}

const server = http.createServer(async (req,res) => {
    //I should try to switch cases for multiple url paths
    var url = req.url;

    switch(url){
        case '/first':{
            res.statusCode = 200;
            res.write("First API response from Node :D");
            res.end();
            break;
        }
        case '/second':{
            //Here let me try to call a third party api
            //Options I have: node-fetch or Axios
            res.statusCode = 200;
            var temp = await getTodo();

            console.log(temp.data);

            res.write(JSON.stringify(temp.data));
            res.end();
        }
    }
});

server.listen(process.env.PORT);