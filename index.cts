import express from "express";
import bodyParser from "body-parser";

let cors = require("cors");

const app = express();
app.use(cors());


app.listen(4000, () => {
  console.log("server is listening on port 4000");
});

app.use(bodyParser.json());

