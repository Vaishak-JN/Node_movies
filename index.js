// express
// express - server

// commonjs
// const express = require('express');
// const { MongoClient } = require('mongodb');

// latest import statements
// module
import express from "express"
import { MongoClient } from "mongodb"
import dotenv from "dotenv"

// getting all env keys
dotenv.config();

console.log(process.env)

const app = express()

// middleware
// app.use --> intercept every request
// body is parsed as json in every request
app.use(express.json())

// const MONGO_URL = "mongodb://localhost"
const MONGO_URL = process.env.MONGO_URL;


async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("MongoDB connected")
    return client
}
// await without async allowed only in type module
const client = await createConnection()


app.get('/', (req, res) => {
    res.send('Hello World!!!*********')
})

app.get('/movies', async (req, res) => {
    console.log(req.query)
    const filter = req.query
    if (filter.rating) {
        filter.rating = +filter.rating
    }
    // d.movies.find({language:"tamil"}) 
    // find returns cursor --> toArray
    const movie = await client.db("b251we").collection("movies").find(filter).toArray()
    console.log(movie)
    movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })


    // const filtreredMovies = movies;
    // const { language, rating } = req.query;
    // // if both language and rating is given
    // if ((language && rating) && res.send(filtreredMovies.filter(mv => mv.language === language).filter(mv => mv.rating == rating))) return
    // // only language
    // if (language && res.send(filtreredMovies.filter(mv => mv.language === language))) return
    // // only rating
    // if (rating && res.send(filtreredMovies.filter(mv => mv.rating === +rating))) return
    // // no rating or language
    // if ((!language && !rating) && res.send(filtreredMovies)) return
})

app.get('/movies/:id', async (req, res) => {

    const { id } = req.params

    // db.movies.findOne({"id":"105"})
    const movie = await client.db("b251we").collection("movies").findOne({ "id": id })
    console.log(movie)
    movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })


    // const [result] = movies.filter(movie => movie.id === id)
    // res.send(movies.find(movie => movie.id === id))
    // result ? res.send(result) : res.send({ msg: "Movie not found" })
    // console.log(id)
})

app.post("/movies", async (req, res) => {

    const data = req.body
    console.log(data)

    // db.movies.insertMany(data)
    const movie = await client.db("b251we").collection("movies").insertMany(data)
    res.send()
})

// port
const PORT = 9000
app.listen(PORT, () => console.log("The server is started", PORT))