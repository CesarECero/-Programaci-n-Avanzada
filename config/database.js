const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected');
}).catch(err => {
    console.log('Error connecting to database');
    console.log(err);
});
module.exports = mongoose;