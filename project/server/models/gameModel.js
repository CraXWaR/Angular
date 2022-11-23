const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        require: true
    },
    gameGenre: {
        type: String,
        required: true
    },
    gameDescription: {
        type: String,
        require: true
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }],
    ownerId: {
        type: ObjectId,
        ref: 'User'
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Game', gameSchema);