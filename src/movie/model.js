const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    director: {
        type: String,
        default: "Not specified"

    },
    actor: {
        type: String,
        default: "Not specified"
    },
    year: {
        type: Number,
        default: "Not specified"
    },
    rating: {
        type: Number,
        default: "Not specified"
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;