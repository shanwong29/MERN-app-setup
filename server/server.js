require("dotenv").config();
const express = require("express");
const app = express();
// const cors = require("cors");
const port = 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*The browser asks for permissions by using what is called a preflight request. 
A preflight request is a small request that is sent by the browser before the actual request. 
It contains information like which HTTP method is used, as well as if any custom HTTP headers are present. 
The preflight gives the server a chance to examine what the actual request will look like before it’s made. 
The server can then indicate whether the browser should send the actual request, or return an error to the client without sending the request.*/

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");

  /*The Access-Control-Allow-Headers response header is used in response to a preflight request 
  which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request.*/
  //soloving this err: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
  res.header("Access-Control-Allow-Headers", "Content-Type");

  // solving this err: Method DELETE is not allowed by Access-Control-Allow-Methods in preflight response.
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

  next();
});

/* solving this err: Access to XMLHttpRequest at 'http://localhost:5000/api/toDoItems' from origin 'http://localhost:9000' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. */
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:9000"], // <== the URL of our React app
//   })
// );

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://shanwong:${process.env.MONGODB_ATLAS_PWD}@cluster0-xzvwq.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const toDoItemsRoutes = require("./router/toDoItem");
app.use("/api/toDoItems", toDoItemsRoutes);

app.listen(port, () => console.log(`Server is listening on ${port}`));
