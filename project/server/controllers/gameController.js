const { createGame, getAllGames, getOneGame } = require('../services/gameService');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const data = req.body;
    try {
        // data.owner = req.user.username;
        const game = await createGame(data);
        res.status(201).json(game);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

router.get('/', async (req, res) => {
    const games = await getAllGames();
    res.status(200).json(games);
    
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const game = await getOneGame(id);
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json('Invalid game ID');
    }
});

module.exports = router;