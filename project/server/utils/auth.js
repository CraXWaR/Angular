const jwt = require('./jwt');
const authCookieName = 'auth-cookie';
const { userModel, tokenBlacklistModel } = require('../models/userModel');

function auth(unauthenticated = true) {
    return function (req, res, next) {
        const token = req.cookies[authCookieName] || '';
        Promise.all([
            jwt.verifyToken(token),
            tokenBlacklistModel.findOne({ token })
        ])
            .then(([data, blackListedToken]) => {
                if (blackListedToken) {
                    return Promise.reject(new Error('blacklisted token'));

                }
                userModel.findById(data.id)
                    .then(user => {
                        req.user = user;
                        req.isLogged = true;
                        next();
                    })
            })
            .catch(err => {
                if (!unauthenticated) {
                    next();
                    return;
                }
                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    console.error(err);
                    res.status(401)
                        .send({ message: 'Invalid token!' });
                    return;
                }
                next(err);
            })
    }
}

module.exports = auth;