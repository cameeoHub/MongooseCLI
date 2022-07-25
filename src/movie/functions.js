const yargs = require("yargs");
const Movie = require("./model");

exports.createMovie = async (movieObj) => {
    try {
        console.log(movieObj);
        const newMovie = await Movie.create(movieObj)
        console.log(newMovie)
    } catch (error) {
        console.log(error)
    }
}

exports.readMovies = async () => {
    try {
        const list = await Movie.find({Movie});
        console.log(list)
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (filter, update) => {
    try {
        const updateMovie = await Movie.updateOne(filter, update);
        console.log(updateMovie);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj);
    } catch (error) {
        console.log(error);
    }
};