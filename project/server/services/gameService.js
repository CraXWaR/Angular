const Game = require('../models/Game');

const createGame = async (game, id) => {
    try {
        game.owner = id;
        return await Game.create({ ...game })
    } catch (error) {
        throw new Error(error)
    }
};

const getAllGames = async () => {
    return await Game.find({});

}

const getOneGame = async (id) => {
    try {
        return await Game.findById(id).populate('owner');
    } catch (error) {
        console.log(error);
    }
}

const deleteGame = async (id) => {
    return Game.findByIdAndDelete(id);
}

const updateGame = async (id, data) => {
    try {
        return await Game.findByIdAndUpdate(id, { ...data }, { runValidators: true })
    } catch (error) {
        return error
    }
}

const getUserGames = async (_id) => {
    return await Game.find({ owner: _id });
}

module.exports = {
    createGame,
    getAllGames,
    getOneGame,
    deleteGame,
    updateGame,
    getUserGames
}
