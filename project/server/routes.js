const router = require('express').Router();
const authController = require('./controllers/authController');
const gameController = require('./controllers/gameController');

router.get('/', (req, res) => {
    let token = req.headers['X-Authorization'] | 'nothing';

    res.json(token);
});

router.use('/games', gameController);
router.use(authController);

module.exports = router;