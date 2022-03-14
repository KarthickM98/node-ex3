const express = require("express");
const cors = require("cors");
const indexRoute = require("./router");
const app = express();
app
  .use(
    cors({
      origin: "*",
    })
  )
  .get("/api/v1", (req, res) => {
    res.send("hello");
  })
  .use("/api/v1", indexRoute);
app.listen(8000, (req, res) => {
  console.log("application started in port 8000");
});
