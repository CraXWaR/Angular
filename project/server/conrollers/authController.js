const { userModel, tokenBlacklistModel } = require('../models');

const ultils = require('../utils');
const authCookieName = 'auth-cookie';

const bsonToJson = (data) => {
    return JSON.parse(JSON.stringify(data));
};
const removePass = (data) => {
    const { password, __v, ...userData } = data;
    return userData
}

function register(req, res, next) {
    const { email, username, password, repeatPassword } = req.body;

    return userModel.create({ email, username, password })
        .then((createdUser) => {
            createdUser = bsonToJson(createdUser);
            createdUser = removePass(createdUser);

            const token = ultils.jwt.createToken({ id: createdUser._id });

            if (process.env.NODE_ENV === 'production') {
                res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
            } else {
                res.cookie(authCookieName, token, { httpOnly: true })
            }
            res.status(200)
                .send(createdUser);
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                let field = err.message.split('index: ')[1];
                field = field.split(' dub key')[0];
                field = field.substring(0, field.lastIndexOf("_"));

                res.status(409)
                    .send({ message: `This ${field} is already registered!` });
                return;
            }
            next(err);
        })
}