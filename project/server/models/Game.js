const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, 'You should have at least 3 characters!']
    },
    genre: {
        type: String,
        required: true,
        minlength: [3, 'You should have at least 3 characters!']
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description should have at least 10 characters!'],
        maxlength: [10000, 'Description shouldn\'t have more than 10000 characters!']
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Price too low'],
        max: [100, 'Price too high']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Game = new mongoose.model('Game', gameSchema);
module.exports = Game;