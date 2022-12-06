const { createGame } = require('../services/gameService');

const router = require('express').Router();

router.post('/create', async (req, res) => {
    const data = req.body;
    try {
        // data.owner = req.user.username;
        const game = await createGame(data);
        res.status(201).json(game);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

module.exports = router;