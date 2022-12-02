const authController = require('express').Router();
const { login, register } = require('../service/userService');

authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body.username, req.body.email, req.body.password);
        res.status(201).json(token);
        res.end();
    } catch (error) {
        res.status(400).json({ error });
    }
});

authController.post('/login', async (req, res) => {
    try {
        const token = await register(req.body.username, req.body.password);
        res.status(200).json(token);
        res.end();
    } catch (error) {
        res.status(400).json({ error });
    }
});

module.exports = authController;