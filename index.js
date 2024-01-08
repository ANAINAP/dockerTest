var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World! good after-noon'); //write a response to the client
  res.end(); //end the response
}).listen(4000,()=>{
    console.log("server running on 4000")
}); //the server object listens on port 8080