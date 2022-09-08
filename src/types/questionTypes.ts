interface IQuestion {
  id: number;
  askedBy: string;
  question: string;
}

type CreateQuestion = Omit<IQuestion, "id">;
export { IQuestion, CreateQuestion };
