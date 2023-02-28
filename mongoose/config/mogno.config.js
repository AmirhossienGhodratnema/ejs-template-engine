const { default : mongoose} = require('mongoose');
const DB_URL =  'mongodb://localhost:27017/mongooDB';


mongoose.set('strictQuery', true);    // Set strictQuery for error log.
mongoose.connect(DB_URL);    // Connect to mongodb.