import { GetMoviesByReleaseDateController } from "./../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseController";
import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();

const movieRoutes = Router();

movieRoutes.get("/release", getMoviesByReleaseDateController.handle);

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
