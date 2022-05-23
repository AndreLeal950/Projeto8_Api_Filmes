import { validateRequest } from "../middleware/auth.js";
import * as moviesController from "../controllers/movies-controller.js";



export default {
  getAllMovies: {
    method: "GET",
    url: "/movies",
    handler: moviesController.getAllMovies,
    
  },
  
  getOneMovie: {
    method: "GET",
    url: "/movies/:id",
    handler: moviesController.getOneMovie,
    
  },
  
  createMovies: {
    method: "POST",
    url: "/movies",
    preHandler: [validateRequest],
    handler: moviesController.createMovies,
  },

  updateMovies: {
    method: "PUT",
    url: "/movies",
    preHandler: [validateRequest],
    handler: moviesController.updateMovies,
  },

  deleteMovie: {
    method: "DELETE",
    url: "/movies",
    preHandler: [validateRequest],
    handler: moviesController.deleteMovie,
  },



  
};
