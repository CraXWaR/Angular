const { createGame, getAllGames, getOneGame, deleteGame } = require('../services/gameService');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const userId = req?.user?._id;
        const game = await createGame(data, userId);
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
    const game = await getOneGame(req.params.id);
    return res.status(200).json(game);
    
});

router.delete('/:id', async (req, res) => {
    await deleteGame(req.params.id);
    res.status(200).json('Game deleted!')
});

module.exports = router;