const { default : mongoose } = require('mongoose');
const DB_URL =  'mongodb://localhost:27017/mongooDB';


// Connect to mongodb.
mongoose.connect(DB_URL, (err) => console.log(err ? err.message : 'Server connected to mongodb...'));




