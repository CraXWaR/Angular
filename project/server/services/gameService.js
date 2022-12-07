const Game = require('../models/Game');

const createGame = async (game) => {
    try {
        return await Game.create({...game})
    } catch (error) {
        return error
    }
};

const getAllGames = async () => {
    return await Game.find({});

}

module.exports = {
    createGame,
    getAllGames,
    
}