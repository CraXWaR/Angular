const jwt = require('jsonwebtoken');
const secret = process.env.secret || 'ProjectSecret';

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: '1d' });
}

function verifyToken(token) {
    return new Promise((res, rej) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                rej(err);
                return;
            }
            res(data);
        });
    });
}

module.exports = {
    createToken,
    verifyToken
}