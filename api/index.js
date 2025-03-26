import express from "express";
import cors from "cors";
import APITmdbController from "../controllers/APITmdbController.js";



const app = express();

app.use(express.json());



app.use(cors({
  origin: 'https://film-project-frontend.vercel.app/',
}));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API !" });
});

app.get('/popular', APITmdbController.getPopularMovies);

app.get('/search', APITmdbController.getMoviesBySearch);

app.get('/genres', APITmdbController.getAllGenres);

app.get('/filter', APITmdbController.getFilteredMovies);

app.get('/years', APITmdbController.getYears);

app.get('/:id', APITmdbController.getMoviesById);

app.get('/:id/providers', APITmdbController.getProvidersByMovieId);

app.get('/:id/credits', APITmdbController.getMovieCredits);

app.get('/genre/:id', APITmdbController.getMoviesByGenre);


// Exporter l'Express app comme une fonction Serverless
export default app;
