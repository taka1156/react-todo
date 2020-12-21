import React from 'react';
import { Todo } from 'src/types/todo';

type TodoProps = {
  todo: Todo;
};

function formatDate(date: Date | null) {
  /**
   * 日付の形式を変える
   */
  if (date == null) return '--/--/--';
  return new Date(date).toLocaleDateString();
}

function View(props: TodoProps) {
  return (
    <>
      <td>{formatDate(props.todo.startDate)}</td>
      <td>{formatDate(props.todo.finishDate)}</td>
      <td>{props.todo.task}</td>
      <td>{props.todo.isDone}</td>
      <td>
        <button>x</button>
      </td>
    </>
  );
}

export default View;
