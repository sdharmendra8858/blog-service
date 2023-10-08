const { Schema, default: mongoose } = require("mongoose");

const blogSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    comments: [{
        message: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }]
}, {
    timestamps: true
});

module.exports = blogSchema;