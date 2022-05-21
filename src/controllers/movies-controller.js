import { prisma } from "../helpers/utils.js";

export const getAllMovies = async (req, reply) => {
  try {
    const movies = await prisma.movie.findMany();

    return movies;
  } catch (error) {
    console.error("movies", error);
    reply.status(400).send("Tivemos um erro em nosso servidor e não foi possível consulta o filme")
    
  }
};
export const createMovies = async (req, reply) => {
  try {
    const { id } = req.user
    const { title, description, gender_id, user_id} = req.body;
    const movies = await prisma.movie.create({
      data: {
        title,
        description,
        gender: {
          connect: { id: Number(gender_id) }
          
        },
        user: {
          connect: { id: Number(id) }
        }
      },
    });
    console.log(movies);

    reply.status(201).send(movies)
  } catch (error) {
    console.error("movies", error);
    reply.status(400).send("Tivemos um erro em nosso servidor e não foi possível cadastrar o filme")
    
  }
};


