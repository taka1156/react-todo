import { Todo } from 'src/types/todo';

class TodoApp {
  private static instance: TodoApp;
  todos: Todo[];

  private constructor() {
    this.todos = [];
  }

  public static getInstance(): TodoApp {
    if (this.instance == null) {
      this.instance = new TodoApp();
      return this.instance;
    } else {
      return this.instance;
    }
  }

  public todoAdd(todo: Todo): void {
    this.todos.push(todo);
  }

  public changeState(changeIndex: number) {
    this.todos[changeIndex].isDone = true;
  }

  private checkFoolControle(isDone: boolean): boolean {
    //　すでに達成済み
    if (isDone) return true;
    // 達成してないのに消そうとしている
    const isOK = window.confirm(
      '終了していないタスクを削除しようとしています。\nよろしいですか?'
    );
    return isOK;
  }

  public todoDelete(deleteIndex: number): void {
    const isDone = this.todos[deleteIndex].isDone;
    if (this.checkFoolControle(isDone)) {
      this.todos = this.todos.filter((todo, i) => deleteIndex !== i);
    }
  }

  public todoTextSearch(searchText: string) {
    this.todos = this.todos.filter(
      (todo) => todo.task.indexOf(searchText) !== -1
    );
  }
}

export { TodoApp };
