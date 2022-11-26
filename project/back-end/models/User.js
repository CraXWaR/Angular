const { Schema, model  } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        // minlength: [2, 'Username should be at least 2 charcters'] 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        // minlength: [10, 'Email should be at least 10 charcters'] 
    },
    password: { 
        type: String, 
        required: true 
    }
})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 9)
    .then((hashedPassword) => {
        this.password = hashedPassword;
        return next();
    });
})

const User = model('User', userSchema);

module.exports = User;