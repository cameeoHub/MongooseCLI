require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, readMovies, updateMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.create) {
        await createMovie( {title: yargsObj.title, director: yargsObj.director, actor: yargsObj.actor, year: yargsObj.year, rating: yargsObj} );
        // adds movie to db
    } else if (yargsObj.read) {
        await readMovies()
        // list all movies
    } else if (yargsObj.update) {
        const filterObj = { title: yargsObj.title };
        const updateObj = { title: yargsObj.newTitle };
        await updateMovie(filterObj, updateObj);
        // update movies
    } else if (yargsObj.delete) {
        await deleteMovie( {title: yargsObj.title} );
        // delete movies
    } else {
        console.log("incorrect command");
    }
    await mongoose.disconnect();
}

app(yargs.argv);

