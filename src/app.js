require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, readMovies, updateMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.create) {
        await createMovie({title: yargsObj.title, actor: yargsObj.actor});
        // adds movie to db
    } else if (yargsObj.read) {
        await readMovies()
        // list all movies
    } else if (yargsObj.update) {
        await updateMovie({title: yargsObj.title}, {$set: {title: yargsObj.newTitle}});
        // update movies
    } else if (yargsObj.delete) {
        // delete movies
    } else {
        console.log("incorrect command");
    }
    await mongoose.disconnect();
}

app(yargs.argv);