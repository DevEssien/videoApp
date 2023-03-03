const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const userRoute = require("./routes/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoute);

app.listen(3002, () => {
    console.log("Server is spinning at port 3002");
});
