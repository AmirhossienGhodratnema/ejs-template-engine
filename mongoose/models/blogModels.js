const { Schema, model } = require('mongoose');


// schema blog model to DB.
const BlogSchema = new Schema({
    title : { type : String, require : true, trim : true },
    text : { type : String , require : true, trim : true , minLength : 5},
    show : {type : Boolean, default : true},
    likes : {type : Number, default : 0},
    bookmarks : {type : [String], default : []},
},{ timestamps : true });


const Blog = model('Blog', BlogSchema);    // Create mode schema

module.exports = { Blog };