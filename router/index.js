const express = require('express');
const { Blog } = require('../mongoose/models/blogModels');
const route = express.Router();




route.get('/', (req, res, next) => {
    try {
        const users = [
            {id : 1, name : 'Amirhossein', lastName : 'Ghodratnema', age : 24},
            {id : 2, name : 'Milad', lastName : 'Nemayan', age : 25},
            {id : 3, name : 'Abolfazl', lastName : 'Seriyani', age : 18},
        ]
        return res.render('index', { users });
        // return res.status(200).json('Main route is ok...');  
    } catch (error) {
        next(error);
    };
});



// Create new model with Create method.
route.post('/created', async (req, res, next) => {
    try {
        const { title , text } = req.body;
        const newBlog = await Blog.create({title, text});
        return res.json('Create blog is ok...');
    } catch (error) {
        next(error);        
    };
});


// Create new model with new model and save.
route.post('/create-new', async (req, res, next) => {
    try {
        const { title, text } = req.body;
        const newBlog = new Blog({ title, text });
        await newBlog.save();
        return res.json('Create-new');     
    } catch (error) {
        next(error);
    };
});

module.exports = {
    route,
}