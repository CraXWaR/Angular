const User = require('../models/User');
const { register, login } = require('../services/userService');
const jwtDecode = require('jwt-decode');

const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { username, email, fullName, password, userInfo } = req.body;
    try {
        const user = await register(username, email, fullName, password, userInfo);
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
   
        res.status(200).json({"username": username, "email": email});
        res.end();
    } catch (error) {
        console.log(error);
    }
});

router.get('/logout', (req, res) => {
    res.status(204).end();

});

module.exports = router;