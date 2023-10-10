const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
require("dotenv").config();

const { sessionObj, redisClient } = require("./db/redis/redisConnect");
global.redisClient = redisClient;

const app = express();
app.use(session(sessionObj));

const routes = require("./routes");

require("./db/connection");

app.use(bodyParser.json());

app.use('/blog', routes);

const server = app.listen(process.env.PORT, () => {
    console.log("Listening on server", server.address());
})