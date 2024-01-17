const http = require("http");
const hostname = "localhost";
const port = 3000;
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const dishesRouter = require("./routes/dishRouter")


//router
// app.use((req,res, next)=>{
//     console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('Content-type','text/html');
//     res.end('<html><body><h1>This is Express server</h1></body></html>');

// })
app.use(morgan('dev'));
app.use(bodyParser.json());

//


// app.use(express.static(__dirname + "/public"));
app.use(dishesRouter)

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
