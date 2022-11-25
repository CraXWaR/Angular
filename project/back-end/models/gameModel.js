const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const themeSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    comments: [{
        type: ObjectId,
        ref: "Post"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Theme', themeSchema);
