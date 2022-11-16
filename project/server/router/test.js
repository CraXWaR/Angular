const express = require('express');
const router = express.Router();


const data = {
    'name': 'project',
    'version': '1.0.0',
    'description': '',
    'main': 'index.js',
}

router.get('/', function (req, res) {
    res.send(data);
})

module.exports = router;