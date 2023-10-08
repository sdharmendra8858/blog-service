const express = require("express");

const blogModule = require("./modules/blog");
const auth = require("./middleware/authorization");

const routes = express.Router();

routes.post("/create", auth.verifyToken, blogModule.createBlog);
routes.get("/getList", blogModule.getBlogList);

module.exports = routes;