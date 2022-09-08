import { prisma } from "../config/database";
import { CreateQuestion } from "../types/questionTypes";

async function insert(createQuestion: CreateQuestion) {
  await prisma.questions.create({
    data: createQuestion,
  });
}

async function getAll() {
  const allQuestions = await prisma.questions.findMany();
  return allQuestions;
}

async function getById(id: number) {
  const oneQuestion = await prisma.questions.findFirst({
    where: { id },
    select: {
      id: true,
      askedBy: true,
      question: true,
      answers: {
        select: {
          answeredBy: true,
          answer: true,
        },
      },
    },
  });
  return oneQuestion;
}

export default {
  insert,
  getAll,
  getById,
};
