import React from 'react';
import { Todo } from 'src/types/todo';
import BaseInputCheckbox from '../BaseInputCheckbox/BaseInputCheckbox';
import BaseBtn from '../BaseBtn/BaseBtn';
import './TodoItem.css';

type Props = {
  todo: Todo;
  onCheck: (index: number) => void;
  onRemove: (index: number) => void;
};

function formatDate(date: Date | null): string {
  /**
   * 日付の形式を変える
   */
  if (date == null) return '--/--/--';
  return new Date(date).toLocaleDateString();
}

const View = ({ todo, onCheck, onRemove }: Props): JSX.Element => {
  return (
    <tr className="todo-table-item">
      <td>
        <BaseInputCheckbox
          isDone={todo.isDone}
          onCheck={() => onCheck(todo.index)}
        />
      </td>
      <td>{formatDate(todo.startDate)}</td>
      <td>{formatDate(todo.finishDate)}</td>
      <td>{todo.task}</td>
      <td>
        <BaseBtn btnText="x" onClick={() => onRemove(todo.index)} />
      </td>
    </tr>
  );
};

export default View;
