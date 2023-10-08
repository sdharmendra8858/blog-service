const _ = require("lodash");

const Blog = require("../db/blog/blogModel");
const { apiCall } = require("../utils/apiCall");
const { USER_SERVICE } = require("./../constants/service");

const createBlog = async (req, res) => {
    console.log("----- In BlogModule createBlog method -----");
    try{

        const { title, description } = req.body;

        if(_.isEmpty(title)){
            throw new Error("Please provide title to blog");
        }

        if(_.isEmpty(description)){
            throw new Error("Please provide description to the blog");
        }

        const url = USER_SERVICE.baseUrl + USER_SERVICE.create.endpoint;
        const method = USER_SERVICE.create.method;

        const user = await apiCall(url, method, {}, {token: req.token});

        const payload = {
            title,
            description,
            author: user.data._id
        }

        const result = await Blog.createBlog(payload);

        return res.send(result);
    }catch(err){
        console.error("----- Error in BlogModule createBlog method -----", err);
        return res.status(400).send(err);
    }
}

const getBlogList = async (req, res) => {
    console.log("----- Inn BlogModule getBlogList method -----");
    try{
        const result = await Blog.getBlogList();

        return res.send(result);
    }catch(err){
        console.error("----- Error in BlogModule getBlogList method -----", err);
        return res.status(400).send(err);
    }
}

module.exports = {
    createBlog,
    getBlogList
}