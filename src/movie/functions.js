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

exports.updateMovie = async (movieObj) => {
    const toEdit = await Movie.findOne(yargsObj.title);
    const toUpdateWith = { title: yargsObj.newTitle };
    await toEdit.updateOne(Movie, toUpdateWith);
    console.log("finally!")
    console.log(editedMovie)
}