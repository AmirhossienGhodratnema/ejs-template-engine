const { newBlogs : Blog } = require('./../mongoose/models/blogModels');


const insertMany = async (req, res, next) => {
    try {
   await Blog.insertMany([
        {title : '111111111111' , text : 'One One One One One '},
        {title : '222222222222' , text : 'two two two two two '},
        {title : '333333333333' , text : 'three three three three'},
    ]);
    return
    } catch (error) {
        next(error);
    };
};



module.exports = { 
    insertMany 
};