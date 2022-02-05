import { client } from "./index.js";
import bcrypt from "bcrypt"
import { ObjectId } from "mongodb";

async function getMovies(filter) {
    // d.movies.find({language:"tamil"})
    // find returns cursor --> toArray
    return await client.db("b251we").collection("movies").find(filter).toArray();
}

async function createMovies(data) {
    // db.movies.insertMany(data)
    return await client.db("b251we").collection("movies").insertMany(data);
}
async function genPassword(password) {
    // 10 rounds of salting
    const salt = await bcrypt.genSalt(10)
    console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}
async function getUserByName(username) {
    // db.movies.findOne({"id":"105"})
    return client.db("b251we").collection("users").findOne({ username: username });
}
async function createUser(data) {
    // db.users.insertMany(data)
    return await client.db("b251we").collection("users").insertOne(data)

}
async function getMovieById(id) {
    // db.movies.findOne({"id":"105"})
    return client.db("b251we").collection("movies").findOne({ "_id": ObjectId(id) });
}

async function deleteMovieById(id) {
    // db.movies.deleteOne({"id":"105"})
    return client.db("b251we").collection("movies").deleteOne({ "_id": ObjectId(id) });
}

async function updateMovieById(id, updatedMovie) {
    // db.movies.updateOne({"id":"105"},{$set:updatedMovie})
    return client.db("b251we").collection("movies").updateOne({ "_id": ObjectId(id) }, { $set: updatedMovie });
}


export { getMovieById, createMovies, getMovies, deleteMovieById, updateMovieById, createUser, genPassword, getUserByName };