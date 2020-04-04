const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:9000"] // <== this will be the URL of our React app (it will be running on port 3000)
//   })
// );

app.listen(port, () => console.log(`Server is listening on ${port}`));

app.get("/api/somedata", (req, res) => {
  const someData = [{ id: 1, firstname: "John", lastname: "Doe" }];

  res.json(someData);
});
