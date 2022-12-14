const { createGame, getAllGames, getOneGame, deleteGame, updateGame, getUserGames } = require('../services/gameService');
const jwtDecode = require('jwt-decode');
// const { updateGamesOnUser } = require('../services/userService');

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
    const id = req.params.id;
    const data = req.body;
    const game = await getOneGame(id);
    // console.log(req?.user?._id);
    try {
        const token = jwtDecode(data.token);
        const userId = token._id;
        if (userId == game.owner._id) {
            await updateGame(id, data)
            const updatedGame = await getOneGame(id)
            res.status(200).json(updatedGame)
        } else {
            throw new Error('You are not the owner!')
        }
    } catch (error) {
        console.log(data);

        res.status(400).json({ error: error.message })
    }
});

router.get('/mygames', async (req, res) => {
    const data = req.body;
    const token = jwtDecode(data.token);
    
    try {
        const userId = token._id;
        const games = await getUserGames(userId);
        res.status(200).json(games);
        res.end();
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;