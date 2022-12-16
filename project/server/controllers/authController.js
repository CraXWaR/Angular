const User = require('../models/User');
const { register, login } = require('../services/userService');
const jwtDecode = require('jwt-decode');

const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { username, email, fullName, userInfo, password } = req.body;
    try {
        const user = await register(username, email, fullName, userInfo, password);
        res.status(201).json(user);

    } catch (error) {
        console.log(error);
        res.status(400).json({ error });

    }
    res.end();
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await login(username, password);
        res.status(201).json(user);

    } catch (error) {
        res.status(400).json({ error: error.message });

    }
    res.end()
});

router.post('/profile', (req, res) => {
    const data = req.body;
    const token = jwtDecode(data.token);
    
    try {
        const username = token.username;
        const email = token.email;
        const fullName = token.fullName;
        const userInfo = token.userInfo;

        res.status(200).json({ "username": username, "email": email, "fullName": fullName, "userInfo": userInfo });
        res.end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/logout', (req, res) => {
    res.status(204).end();

});

module.exports = router;