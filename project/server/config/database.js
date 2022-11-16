const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(config.databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
};