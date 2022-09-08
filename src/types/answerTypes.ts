interface IAnswers {
  id: number;
  answeredBy: string;
  answer: string;
  questionId: number;
}
type CreateAnswer = Omit<IAnswers, "id">;

export { IAnswers, CreateAnswer };
