const router = require('express').Router();
const authController = require('./controllers/authController');
const gameController = require('./controllers/gameController');

router.get('/', (req, res) => {
    // req.headers['X-Authorization'] = 'asdjpoiasdqi9h402rjpm'
    let token = req.headers['X-Authorization'] | 'nothing';
    res.json(token);
    // res.end()
});

router.use(gameController);
router.use(authController);

module.exports = router;