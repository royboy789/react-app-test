const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

const axios = require("axios");

app.use(cors());

app.get("/", (req, res) => {
  res.set("Content-Type", "application/json");
  const fetchUrl = req.query.url
    ? req.query.url
    : "https://reddit.com/r/reactjs.json";
  axios.get(fetchUrl).then(function (response) {
    let data = response.data.data;
    res.send(JSON.stringify(data));
  }).catch((error) => {
    res.status(error.response.data.error);
    res.send(error.response.data.message);
  });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
