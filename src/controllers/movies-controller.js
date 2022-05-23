import { prisma } from "../helpers/utils.js";

export const getAllMovies = async (req, reply) => {
  try {
    const movies = await prisma.movie.findMany();

    
    console.log("Consulta realizada com SUCESSO!");
    reply.status(201).send("Consulta realizada com SUCESSO!")

  } catch (error) {
    console.error("movies", error);
    reply.status(400).send("Não foi possível consulta o filme")
    
  }
};


export const getOneMovie = async (req, reply) => {
  try {
    const { id } = req.params;
    console.log(id);
    const movie = await prisma.movie.findMany({
      where: {
         id: Number(id) 
      },
      data: {
        title,
        description,
        gender: {
          connect: { id: Number(id) }
          
        },
       
      },
      
    });   
    console.log("Consulta realizada com SUCESSO!");
    reply.status(201).send(movie)

  } catch (error) {
    console.error("movies", error);
    reply.status(400).send("Não foi possível consulta o filme")
    
  }
};

export const createMovies = async (req, reply) => {
  try {
    const { id } = req.user
    const { title, description, gender_id } = req.body;
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
    
    console.log("CADASTRO REALIZADO COM SUCESSO!");
    reply.status(201).send( "CADASTRO REALIZADO COM SUCESSO!")
  } catch (error) {
    console.error("movies", error);
    reply.status(400).send("Não foi possível cadastrar o filme")
    
  }
};

export const  updateMovies = async (req, reply) => {
  try {
    const { title, description, gender_id, id } = req.body;
    const movies = await prisma.movie.update({
      where: {
         id: Number(id) 
      },      
      data: {
        title,
        description,
        gender: {
          connect: { id: Number(gender_id) }
          
        },
       
      },
    });
    
    console.log("CADASTRO ATUALIZADO COM SUCESSO!");
    reply.status(201).send("CADASTRO ATUALIZADO COM SUCESSO!")
  } catch (error) {
    console.error("movies", error);
    reply.status(400).send("Não foi possível Atualizar o FILME!")
    
  }
};

export const  deleteMovie = async (req, reply) => {
  try {
    const { id } = req.body;
    const movies = await prisma.movie.delete({
      where: {
         id: Number(id) 
      },      
      
    });
   console.log("CADASTRO EXCLUIDO COM SUCESSO!");

    reply.status(201).send("CADASTRO EXCLUIDO COM SUCESSO!")
  } catch (error) {
    console.error("movies", error);
    reply.status(400).send("Não foi possível Excluir o filme!")
    
  }
};


