import { Todo, InputTodo } from 'src/types/todo';

class TodoApp {
  private static instance: TodoApp;
  todos: Todo[] = [];

  private constructor() {}

  public static getInstance(): TodoApp {
    if (this.instance == null) {
      this.instance = new TodoApp();
      return this.instance;
    } else {
      return this.instance;
    }
  }

  public getTodos = (): Todo[] => {
    return this.todos;
  };

  private checkInput = (inputTodo: InputTodo): boolean => {
    if (
      inputTodo.startDate == null ||
      inputTodo.finishDate == null ||
      inputTodo.task === ''
    ) {
      return false;
    }
    return true;
  };

  public addTodo = (inputTodo: InputTodo): boolean => {
    console.log(inputTodo)
    if (this.checkInput(inputTodo)) {
      const todo: Todo = {
        ...inputTodo,
        index: this.todos.length,
        isDone: false,
      };
      this.todos.push(todo);
      return true;
    }
    alert('入力漏れがあります。');
    return false;
  };

  public changeState = (changeIndex: number): void => {
    this.todos[changeIndex].isDone = !this.todos[changeIndex].isDone;
  };

  private checkFoolControle = (isDone: boolean): boolean => {
    //　すでに達成済み
    if (isDone) return true;
    // 達成してないのに消そうとしている
    const isOK = window.confirm(
      '終了していないタスクを削除しようとしています。\nよろしいですか?'
    );
    return isOK;
  };

  public deleteTodo = (deleteIndex: number): void => {
    const isDone = this.todos[deleteIndex].isDone;
    if (this.checkFoolControle(isDone)) {
      this.todos = this.todos.filter((todo, i) => deleteIndex !== i);
    }
  };

  public textSearchTodo = (searchText: string): Todo[] => {
    return this.todos.filter((todo) => todo.task.indexOf(searchText) !== -1);
  };
}

export { TodoApp };
