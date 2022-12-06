const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
        // minlength: [3, 'You should have at least 3 characters!']
    },
    genre: {
        type: String,
        // required: true,
        // minlength: [3, 'You should have at least 3 characters!']
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
        // minlength: [10, 'Description should have at least 10 characters!'],
        // maxlength: [50, 'Description shouldn\'t have more than 50 characters!'],
    },
    owner: {
        type: [Types.ObjectId],
        ref: 'User'
    }
});

const Game = new mongoose.model('Game', gameSchema);
module.exports = Game;