import { CreateQuestion } from "../types/questionTypes";
import questionRepository from "../repositories/questionRepository";
export async function createQuestionService(body: CreateQuestion) {
  await questionRepository.insert(body);
}

export async function getAllQuestions() {
  const allQuestions = await questionRepository.getAll();
  return allQuestions;
}

export async function questionById(id: number) {
  const oneQuestion = await questionRepository.getById(id);
  return oneQuestion;
}
