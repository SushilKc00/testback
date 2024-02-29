const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const subdomain = req.hostname.split(".")[0];
  console.log(subdomain);
  //   const hostname = `${req.protocol}://${req.hostname}`;
  //   const split = hostname.split(".");
  res.send("Welcome to page");
});

app.get("/:domain", (req, res) => {
  const { domain } = req.params;
  res.send(domain);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
