import mongoose from "mongoose";

const { Schema } = require("mongoose");

 const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
 }, {
    timestamps: true
 });

 //in mongo we have to send the model,
export default mongoose.model('Post', postSchema);

//basically it's gonna create a USer collection on our db