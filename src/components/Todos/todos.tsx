import React from 'react';
import { Todo } from 'src/types/todo';
import TodoComponent from '../Todo/todo';
import './todos.css';

type Props = {
  todos: Todo[];
  onCheck: (index: number) => void;
  onRemove: (index: number) => void;
};

function View({ todos, onCheck, onRemove }: Props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>開始日</th>
            <th>終了日</th>
            <th>タスク</th>
            <th>Done</th>
            <th>消去</th>
          </tr>
        </thead>
        <tbody>
            {todos.map((item, i) => (
              <TodoComponent
                key={`todo_${i}`}
                todo={item}
                onCheck={onCheck}
                onRemove={onRemove}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;
