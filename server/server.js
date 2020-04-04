const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = 5000;

const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://shanwong:${process.env.MONGODB_altas_pwd}@cluster0-xzvwq.mongodb.net/test?retryWrites=true&w=majority`
);

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:9000"] // <== this will be the URL of our React app (it will be running on port 3000)
//   })
// );

app.get("/api/somedata", (req, res) => {
  const someData = [{ id: 1, firstname: "John", lastname: "Doe" }];

  res.json(someData);
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
