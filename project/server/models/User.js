const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [4, 'Username should have at least 4 characters!'],
        maxlength: [10, 'Username cannot have more than 10 characters!'],
    },
    email: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
        minlength: [10, 'Full name should have at least 10 characters!'],
        maxlength: [30, 'Full name cannot have more than 20 characters!'],
    },
    userInfo: {
        type: String,
        minlength: [10, 'Personal information should have at least 10 characters!'],
        maxlength: [200, 'Personal information cannot have more than 200 characters!'],
    },
    password: {
        type: String,
        required: true,
        minlength: [3, 'Password should have at least 3 characters!'],
        maxlength: [20, 'Password cannot have more than 20 characters!'],
    }
    // createdGames: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: 'Game',
    //     }
    // ],
    // wishedGames: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: 'Game',
    //     }
    // ]
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