import { prisma } from "../helpers/utils.js";

export const getAllGender = async (req, reply) => {
  try {
    const genders = await prisma.gender.findMany();

    return genders;
  } catch (error) {
    console.error("genders", error);
    reply.status(400).send("Tivemos um erro em nosso servidor e não foi possível consulta o gênero")
    
  }
};

export const createGender = async (req, reply) => {
  try {
    const {  name } = req.body;
    const genders = await prisma.gender.create({data: { name }});

    reply.status(201).send(genders); reply.send("GÊNERO CADASTRADO COM SUCESSO!")
  } catch (error) {
    console.error("genders", error);
    reply.status(400).send("Tivemos um erro em nosso servidor e não foi possível cadastrar o gênero")
    
  }
};


