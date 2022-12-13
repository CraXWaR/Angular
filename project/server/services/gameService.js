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
    return await Game.findById(id).populate('owner');
}

const deleteGame = async (id) => {
    return Game.findByIdAndDelete(id);
}

const updateGame = async (id, data) => {
    const existing = await Game.findById(id);

    existing.title = data.title;
    existing.genre = data.genre;
    existing.price = data.price;
    existing.imageUrl = data.imageUrl;
    existing.description = data.description;

    return existing.save()
}

module.exports = {
    createGame,
    getAllGames,
    getOneGame,
    deleteGame,
    updateGame
}