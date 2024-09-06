import mongoose, { Schema } from "mongoose";

const BlogSchema =  new Schema('blog', {
    title: String,
    content: String,
    tag: String
})

const BlogModel = mongoose.Model(blog);