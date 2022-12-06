const Game = require('../models/Game');

const createGame = async (game) => {
    try {
        return await Game.create({...game})
    } catch (error) {
        return error
    }
};

module.exports = {
    createGame,
    
}