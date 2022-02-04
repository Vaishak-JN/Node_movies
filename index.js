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
import { getMovieById, createMovies, getMovies } from "./movieFunctions.js";
import { moviesRouter } from "./routes/movies.js"
import { usersRouter } from "./routes/users.js"
import bcrypt from "bcrypt"


// getting all env keys
dotenv.config();

// console.log(process.env)

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
export const client = await createConnection()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use("/movies", moviesRouter)
// express router middleware

app.use("/users", usersRouter)


// port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("The server is started", PORT))



// app.get('/movies', async (req, res) => {
//     console.log(req.query)
//     const filter = req.query
//     if (filter.rating) {
//         filter.rating = +filter.rating
//     }

//     const movie = await getMovies(filter)
//     console.log(movie)
//     movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })

//     // const filtreredMovies = movies;
//     // const { language, rating } = req.query;
//     // // if both language and rating is given
//     // if ((language && rating) && res.send(filtreredMovies.filter(mv => mv.language === language).filter(mv => mv.rating == rating))) return
//     // // only language
//     // if (language && res.send(filtreredMovies.filter(mv => mv.language === language))) return
//     // // only rating
//     // if (rating && res.send(filtreredMovies.filter(mv => mv.rating === +rating))) return
//     // // no rating or language
//     // if ((!language && !rating) && res.send(filtreredMovies)) return
// })

// app.get('/movies/:id', async (req, res) => {

//     const { id } = req.params


//     const movie = await getMovieById(id)
//     console.log(movie)
//     movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })


//     // const [result] = movies.filter(movie => movie.id === id)
//     // res.send(movies.find(movie => movie.id === id))
//     // result ? res.send(result) : res.send({ msg: "Movie not found" })
//     // console.log(id)
// })

// app.post("/movies", async (req, res) => {

//     const data = req.body
//     console.log(data)


//     const movie = await createMovies(data)
//     res.send(movie)
// })