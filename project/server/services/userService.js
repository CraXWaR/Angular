const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const server = require('../environment')
const User = require('../models/User')

const validateToken = (token) => {
    try {
        const data = jwt.verify(token, server.SECRET_KEY);
        return data;

    } catch (error) {
        throw new Error('Invalid access token!');
    }
}
const createAccessToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username,
    };
    const accessToken = jwt.sign(payload, server.SECRET_KEY);

    return {
        username: user.username,
        email: user.email,
        accessToken,
        _id: user._id
    };
}
const register = async (username, email, password) => {
    const existingUsername = await User.findOne({ email });
    if (existingUsername) {
        throw new Error('Username is taken!');
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        throw new Error('Email is taken!');
    }

    const user = await User.create({ username, email, password });

    return createAccessToken(user);
}

const login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password!')
    }

    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
        return createAccessToken(user);
    } else {
        throw new Error('Invalid email or password!');
    }
}
//TODO FIX ADD BUG
const updateGamesOnUser = async (_id, gameId) => {
    try {
        const user = await User.findById(_id);
        let arrayOfGames = user.createdGames;
        arrayOfGames.push(gameId);
        console.log(user);
        await User.findByIdAndUpdate(_id, { games: arrayOfGames })
    } catch (error) {
        throw new Error(error);
    }
}

const logout = (token) => {
    blacklist.add(token)
};

module.exports = {
    login,
    register,
    createAccessToken,
    validateToken,
    updateGamesOnUser
}