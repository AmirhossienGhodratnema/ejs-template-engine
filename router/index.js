const express = require('express');
const router = express.Router();




router.get('/', (req, res, next) => {
    try {
        return res.render('index.ejs');
        // return res.status(200).json('Main route is ok...');  
    } catch (error) {
        next(error);
    };
});



module.exports = {
    router,
}