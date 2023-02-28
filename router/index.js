const express = require('express');
const router = express.Router();




router.get('/', (req, res, next) => {
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



module.exports = {
    router,
}