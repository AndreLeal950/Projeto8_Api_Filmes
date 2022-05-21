import { validateRequest } from "../middleware/auth.js";
import * as gendersController from "../controllers/genders-controller.js";

export default {
  getAllGender: {
    method: "GET",
    url: "/genders",
    
    handler: gendersController.getAllGender,
  },
  createGender: {
    method: "POST",
    url: "/genders",
    preHandler: [validateRequest],
    handler: gendersController.createGender,
  },



  
};
