const { mongoose} = require('mongoose');
const DB_URL =  'mongodb://127.0.0.1:27017/myapp';


mongoose.connect(DB_URL);    // Connect to mongodb.