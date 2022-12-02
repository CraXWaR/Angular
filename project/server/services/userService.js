const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

async function register(username, email, password) {
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUsername) {
        throw new Error('Username is already taken!');
    }

    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existingEmail) {
        throw new Error('Email is already taken!');
    }

    const user = await User.create({
        username,
        email,
        hashedPassword: await bcrypt.hash(password, 9)
    });

    return createToken(user);
}

async function login(username, password) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Wrong username or password!');
    }
    
    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Wrong username or password!');
    }

    return createToken(user);
}