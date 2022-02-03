import { client } from "./index.js";

async function getMovies(filter) {
    // d.movies.find({language:"tamil"})
    // find returns cursor --> toArray
    return await client.db("b251we").collection("movies").find(filter).toArray();
}

async function createMovies(data) {
    // db.movies.insertMany(data)
    return await client.db("b251we").collection("movies").insertMany(data);
}

async function getMovieById(id) {
    // db.movies.findOne({"id":"105"})
    return client.db("b251we").collection("movies").findOne({ "id": id });
}

async function deleteMovieById(id) {
    // db.movies.deleteOne({"id":"105"})
    return client.db("b251we").collection("movies").deleteOne({ "id": id });
}

async function updateMovieById(id, updatedMovie) {
    // db.movies.updateOne({"id":"105"},{$set:updatedMovie})
    return client.db("b251we").collection("movies").updateOne({ "id": id }, { $set: updatedMovie });
}


export { getMovieById, createMovies, getMovies, deleteMovieById, updateMovieById };