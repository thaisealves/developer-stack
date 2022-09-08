// TODO
import { prisma } from "../config/database";
import { CreateAnswer } from "../types/answerTypes";

async function insert(createAnswer: CreateAnswer) {
  await prisma.answers.create({
    data: createAnswer,
  });
}

export default {
  insert,
};
