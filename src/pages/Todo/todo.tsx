import React, { useState } from 'react';
import { Todo } from 'src/types/todo';
import './todo.css';
import Forms from '../../components/Forms/Forms';
import Todos from '../../components/TodoTable/TodoTable';
import { TodoApp } from '../../logic/todoApp';

const app = TodoApp.getInstance();

function View() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo): void => {
    const isSuccess = app.addTodo(todo);
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

  const searchTodo = (searchText: string): void => {
    const filterTodo = app.textSearchTodo(searchText);
    setTodos([...filterTodo]);
  };

  return (
    <div className="App">
      <main className="App-body">
        <h1>Todo</h1>
        <Forms onAddTodo={addTodo} onSearchTodo={searchTodo} />
        <Todos
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
