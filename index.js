const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const subdomain = req.hostname.split(".")[0];
  console.log(req.hostname);
  console.log(req.protocol);
  console.log(req.originalUrl);
  console.log(subdomain);
  res.send(`domain is ${subdomain}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
