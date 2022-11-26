const mongoose = require('mongoose');

function initializeDatabase() {
    return mongoose.connect('mongodb://0.0.0.0:27017/test');
}

module.exports = initializeDatabase;