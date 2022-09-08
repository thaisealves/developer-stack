import { Request, Response } from "express";
import { CreateQuestion } from "../types/questionTypes";
import { CreateAnswer } from "../types/answerTypes";
import {
  createQuestionService,
  getAllQuestions,
  questionById,
} from "../services/questionService";
import { createAnswerService } from "../services/answerService";
export async function createQuestion(req: Request, res: Response) {
  // TODO
  const newQuestion: CreateQuestion = req.body;
  await createQuestionService(newQuestion);
  return res.sendStatus(200);
}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const { answeredBy, answer } = req.body;
  const newAnswer: CreateAnswer = {
    answeredBy,
    answer,
    questionId: Number(id),
  };
  await createAnswerService(newAnswer);
  return res.sendStatus(200);
}

export async function get(req: Request, res: Response) {
  const allQuestions = await getAllQuestions();
  return res.status(200).send(allQuestions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const oneQuestion = await questionById(Number(id));
  return res.status(200).send(oneQuestion);
}
