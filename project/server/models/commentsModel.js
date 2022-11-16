const mongoose = require('mongoose');
const { Objectd } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    likes: [{
        type: Objectd,
        ref: 'User'
    }],
    userId: {
        type: Objectd,
        ref: 'User'
    },
    gameId: {
        type: Objectd,
        ref: 'Game'
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Comment', commentSchema);