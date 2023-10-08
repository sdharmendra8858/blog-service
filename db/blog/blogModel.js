const mongoose = require("mongoose");
const blogSchema = require("./blogSchema");

const Blog = new mongoose.model("Blog", blogSchema, "Blog");

const createBlog = async (blogObject) => {
    console.log("In BlogModel createBlog method -----");
    try{
        const obj = await Blog.create(blogObject);

        return obj;
    }catch(err){
        console.error("Error in BlogModel createBlog method -----", err);
        return Promise.reject("Unable to add Record");
    }
}

const getBlogList = async () => {
    console.log("In BlogModel getBlogList method -----");
    try{
        const records = await Blog.find().lean();
        return records;
    }catch(err){
        console.error("Error in BlogModel getBlogList method -----", err);
        return Promise.reject("Could not get the list.")
    }
}

module.exports = {
    createBlog, 
    getBlogList
}