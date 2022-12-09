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

const getOneGame = async (id) => {
    return await Game.findById(id).populate('owner');
}

const deleteGame = async (id) => {
    return Game.findByIdAndDelete(id);
}

module.exports = {
    createGame,
    getAllGames,
    getOneGame,
    deleteGame
}