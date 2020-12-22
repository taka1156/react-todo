type Todo = {
  index: number;
  startDate: Date | null;
  finishDate: Date | null;
  task: string;
  isDone: boolean;
};

type InputTodo = {
  startDate: Date | null;
  finishDate: Date | null;
  task: string;
};

export { Todo, InputTodo };
