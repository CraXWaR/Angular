const { register, login } = require('../services/userService');
const router = require('express').Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await register(username, email, password);
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error })
    }
    res.end();
})

router.get('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await login(username, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error })
    }
    res.end();
})

router.get('/logout', (req, res) => {
    res.status(204).end();
})

module.exports = router;