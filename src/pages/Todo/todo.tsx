import React from 'react';
import { Todo } from 'src/types/todo';
import './todo.css';
import FormsComponent from '../../components/forms/forms';
import TodosComponent from '../../components/Todos/todos';

const dummyTodo: Todo = {
  startDate: new Date(0),
  finishDate: new Date(-8640000000000000),
  task: 'AtCoderを進める(dummy)',
  isDone: false
}

function View() {
  return (
    <div className="App">
      <main className="App-body">
        <h1>Todo</h1>
        <FormsComponent />
        <TodosComponent todos={[dummyTodo]} />
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
