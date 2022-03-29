const express = require("express");
const app = express();

app.use(express.static("docs"));
// return a html element on /api
app.get("/api", (req, res) => {
  res.send(
    "<h1>If you're seeing this, then you got data from a localhost api, and your browser is confusing to me!</h1>"
  );
});

app.listen(2123);
