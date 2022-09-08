// TODO
import { CreateAnswer } from "../types/answerTypes";
import answerRepository from "../repositories/answerRepository";
export async function createAnswerService(body: CreateAnswer) {
  await answerRepository.insert(body);
}
