import React from 'react';
import { Todo } from 'src/types/todo';
import CheckboxComponent from '../Checkbox/checkbox';
import ButtonComponent from '../Button/button';

type TodoProps = {
  todo: Todo;
  onCheck: (index: number) => void;
  onRemove: (index: number) => void;
};

function formatDate(date: Date | null) {
  /**
   * 日付の形式を変える
   */
  if (date == null) return '--/--/--';
  return new Date(date).toLocaleDateString();
}

function View({todo, onCheck, onRemove }: TodoProps) {
  return (
    <tr>
      <td>
        <CheckboxComponent
          isDone={todo.isDone}
          onCheck={() => onCheck(todo.index)}
        />
      </td>
      <td>{formatDate(todo.startDate)}</td>
      <td>{formatDate(todo.finishDate)}</td>
      <td>{todo.task}</td>
      <td>
        <ButtonComponent btnText="x" onClick={() => onRemove(todo.index)} />
      </td>
    </tr>
  );
}

export default View;
