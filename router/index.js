const express = require('express');
const { insertMany } = require('../controller/mainController');
const { Blog } = require('../mongoose/models/blogModels');
const route = express.Router();
const multer = require('multer');


// Setting Options.
const { uploadFile } = require('../middleware/multer');


route.get('/', (req, res, next) => {
    try {
        const users = [
            { id: 1, name: 'Amirhossein', lastName: 'Ghodratnema', age: 24 },
            { id: 2, name: 'Milad', lastName: 'Nemayan', age: 25 },
            { id: 3, name: 'Abolfazl', lastName: 'Seriyani', age: 18 },
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
        const { title, text } = req.body;
        const newBlog = await Blog.create({ title, text });
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
        await newBlog.save(); e
        return res.json('Create-new');
    } catch (error) {
        next(error);
    };
});

route.post('/insertMany', insertMany);

// Upload image
route.post('/upload', uploadFile.single('image'), async (req, res, next) => {
    console.log('req.file', req.file);
    return res.json('Upload iamge');
});


// Three upload image limits.
route.post('/threeUploads', uploadFile.array('image', 3), async (req, res, next) => {
    return res.json(req.files);
});


// Two filed names upload.
route.post('/image-filed', uploadFile.fields([
    { name: 'image', maxCount: 1 },
    { name: 'profile', maxCount: 1 },
]), async (req, res, next) => {
    return res.json(req.files);
});


// Any upload fielsds name.
route.post('/upload-any', uploadFile.any(), async (req, res, next) => {
    return res.json(req.files);
});

module.exports = {
    route,
}