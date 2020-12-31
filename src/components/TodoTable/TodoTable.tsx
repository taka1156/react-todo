import React from 'react';
import { Todo } from 'src/types/todo';
import TodoItem from '../TodoItem/TodoItem';
import './TodoTable.css';

type Props = {
  todos: Todo[];
  onCheck: (index: number) => void;
  onRemove: (index: number) => void;
};

const View = ({ todos, onCheck, onRemove }: Props): JSX.Element => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>開始日</th>
            <th>終了日</th>
            <th>タスク</th>
            <th>消去</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, i) => (
            <TodoItem
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
};

export default View;
