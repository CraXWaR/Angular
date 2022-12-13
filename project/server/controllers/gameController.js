const { createGame, getAllGames, getOneGame, deleteGame, updateGame } = require('../services/gameService');
const jwtDecode = require('jwt-decode');
const { updateGamesOnUser } = require('../services/userService');

const router = require('express').Router();
//TODO 
router.post('/', async (req, res) => {
    const data = req.body;
    const token = jwtDecode(data.token);
    try {
        const userId = token._id;
        const game = await createGame(data, userId);
        // await updateGamesOnUser(userId, game._id);
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

router.put('/:id', async (req, res) => {
    const game = await getOneGame(req.params.id);
    const data = req.body;
    const token = jwtDecode(data.token);
    const userId = token._id;
    // todo parse token
    if (userId != game.owner._id) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        const result = await updateGame(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        // const message = parseError(err)
        res.status(400).json({ error: err.message })
    }
})

module.exports = router;