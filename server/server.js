require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*Access to XMLHttpRequest at 'http://localhost:5000/api/toDoItems' from origin 'http://localhost:9000' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. */
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:9000"], // <== the URL of our React app
  })
);

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://shanwong:${process.env.MONGODB_ATLAS_PWD}@cluster0-xzvwq.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const toDoItemsRoutes = require("./router/toDoItem");
app.use("/api/toDoItems", toDoItemsRoutes);

app.listen(port, () => console.log(`Server is listening on ${port}`));
