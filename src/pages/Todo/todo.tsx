import React, { useState } from 'react';
import { Todo } from 'src/types/todo';
import './todo.css';
import FormsComponent from '../../components/Forms/forms';
import TodosComponent from '../../components/Todos/todos';
import { TodoApp } from '../../logic/todoApp';
import { InputTodo } from 'src/types/todo';

const app = TodoApp.getInstance();

/*const dummyTodo: Todo = {
  startDate: new Date(0),
  finishDate: new Date(-8640000000000000),
  task: 'AtCoderを進める(dummy)',
  isDone: false,
};*/

function View() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (inputTodo: InputTodo): void => {
    const isSuccess = app.addTodo(inputTodo);
    if (isSuccess) {
      setTodos([...app.getTodos()]);
    }
  };

  const deleteTodo = (index: number): void => {
    app.deleteTodo(index);
    setTodos([...app.getTodos()]);
  };

  const changeTodo = (index: number): void => {
    app.changeState(index);
    setTodos([...app.getTodos()]);
  };

  const textSeachTodo = (searchText: string): void => {
    const filterTodo = app.textSearchTodo(searchText);
    setTodos([...filterTodo]);
  };

  return (
    <div className="App">
      <main className="App-body">
        <h1>Todo</h1>
        <FormsComponent onAddTodo={addTodo} onTextSearch={textSeachTodo} />
        <TodosComponent
          todos={todos}
          onCheck={changeTodo}
          onRemove={deleteTodo}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default View;
