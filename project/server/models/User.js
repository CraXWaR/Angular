const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [4, 'Username should have at least 4 characters!'],
        maxlength: [15, 'Username cannot have more than 15 characters!'],
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [3, 'Password should have at least 3 characters!'],
    },
    createdGames: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Game',
        }
    ],
    wishedGames: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Game',
        }
    ]
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 9)
    .then((hash) =>{
         this.password = hash
         return next()
    })
});

const User = new mongoose.model('User', userSchema);

module.exports = User;