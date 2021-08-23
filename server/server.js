const express = require("express");
var cors = require("cors");
const app = express();
const routes = require("./routers/routes.js");
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);


app.listen(process.env.PORT || 8080, () => {
    console.log("app listening on port 8080");
  });