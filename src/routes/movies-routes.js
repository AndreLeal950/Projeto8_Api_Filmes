import { validateRequest } from "../middleware/auth.js";
import * as moviesController from "../controllers/movies-controller.js";

export default {
  getAllMovies: {
    method: "GET",
    url: "/movies",
    preHandler: [validateRequest],
    handler: moviesController.getAllMovies,
  },
  
  createMovies: {
    method: "POST",
    url: "/movies",
    preHandler: [validateRequest],
    handler: moviesController.createMovies,
  },



  
};
