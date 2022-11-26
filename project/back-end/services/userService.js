const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const PORT = require('../environment');
const User = require('../models/User');

const validToken = (token) => {
    try {
        const data = jwt.verify(token, PORT.SECRET_KEY);
        return data;
    } catch (error) {
        throw new Error('Invalid token!');
    }
}

const createToken = (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    };
    const accessToken = jwt.sign(payload, PORT.SECRET_KEY);

    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken
    };
}

const register = async (username, email, password) => {
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
        throw new Error('Username already exists!')
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        throw new Error('Email already exists!')
    }

    const user = await User.create({ username, email, password });
    return createToken(user);
    
}