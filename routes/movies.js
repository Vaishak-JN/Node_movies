import express from "express"
import { getMovieById, createMovies, getMovies, deleteMovieById, updateMovieById } from "../movieFunctions.js";
import { auth } from "../middleware/auth.js";

const router = express.Router()

router
    .route('/')
    .get(async (req, res) => {
        console.log(req.query)
        const filter = req.query
        if (filter.rating) {
            filter.rating = +filter.rating
        }
        const movie = await getMovies(filter)
        // console.log(movie)
        movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })
    })
    .post(async (req, res) => {
        const data = req.body
        console.log(data)
        const movie = await createMovies(data)
        res.send(movie)
    })

router
    .route("/:id")
    .get(async (req, res) => {
        const { id } = req.params
        const movie = await getMovieById(id)
        console.log(movie)
        movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })
    })
    .delete(async (req, res) => {
        const { id } = req.params
        const movie = await deleteMovieById(id)
        console.log(movie)
        movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })
    })
    .put(async (req, res) => {
        const { id } = req.params
        const updatedMovie = req.body
        const movie = await updateMovieById(id, updatedMovie)
        console.log(movie)
        movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })
    })


// router.get('/', async (req, res) => {
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

// router.get('/:id', async (req, res) => {

//     const { id } = req.params


//     const movie = await getMovieById(id)
//     console.log(movie)
//     movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })


//     // const [result] = movies.filter(movie => movie.id === id)
//     // res.send(movies.find(movie => movie.id === id))
//     // result ? res.send(result) : res.send({ msg: "Movie not found" })
//     // console.log(id)
// })

// router.delete('/:id', async (req, res) => {

//     const { id } = req.params
//     const movie = await deleteMovieById(id)
//     console.log(movie)
//     movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })
// })

// router.put('/:id', async (req, res) => {

//     const { id } = req.params
//     const updatedMovie = req.body
//     const movie = await updateMovieById(id, updatedMovie)
//     console.log(movie)
//     movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" })
// })

// router.post("/", async (req, res) => {

//     const data = req.body
//     console.log(data)


//     const movie = await createMovies(data)
//     res.send(movie)
// })

export const moviesRouter = router

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
