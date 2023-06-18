import mongoose from "mongoose";

const { Schema } = require("mongoose");

 const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email:{ 
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
 }, {
    timestamps: true
 });

 //in mongo we have to send the model,
export default mongoose.model("User", userSchema);

//basically it's gonna create a USer collection on our db