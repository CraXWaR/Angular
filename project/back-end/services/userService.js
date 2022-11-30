const bcrypt = require('bcrypt');
const User = require("../models/User");
const jwt = require('jsonwebtoken');

const SECRET_PASSWORD = '5g$SpczU@^@(Qjza';

const tokenBlackList = new Set();

async function getUserById(id) {
    const user = await User.findById(id);

    return user;
}

async function register(email, username, password) {

    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('Email is taken!');

    }


    const user = await User.create({
        email,
        username,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return user;
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
    return user;
}

async function logout(token) {
    tokenBlackList.add(token);

}

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username
    };
    const token = jwt.sign(payload, SECRET_PASSWORD, {
        expiresIn: "1h"
    });

    return token;


}

function parseToken(token) {
    if (tokenBlackList.has(token)) {
        throw new Error('Token is blacklisted!');

    }

    return jwt.verify(token, SECRET_PASSWORD);
}

module.exports = {
    getUserById,
    register,
    login,
    logout,
    createToken,
    parseToken
}