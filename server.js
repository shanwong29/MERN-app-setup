const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

app.listen(port, () => console.log(`Server is listening on ${port}`));

app.get("/api/somedata", (req, res) => {
  const someData = [{ id: 1, firstname: "John", lastname: "Doe" }];

  res.json(someData);
});
