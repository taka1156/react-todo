import React from 'react';
import { useForm } from 'react-hook-form';
import { InputType } from 'src/types/input';
import { Todo } from 'src/types/todo';
import InputDateComponent from '../../BaseInputDate/BaseInputDate';
import InputTextComponent from '../../BaseInputText/BaseInputText';
import '../forms.css';

type Props = {
  onAddTodo: (todo: Todo) => void;
};

type InputTodo = {
  startDate: Date | null;
  finishDate: Date | null;
  task: string;
};

function View({ onAddTodo }: Props) {
  const { register, handleSubmit, reset } = useForm<InputType>();

  const onSubmit = (data: InputTodo) => {
    const todo: Todo = {
      index: 0,
      startDate: data.startDate,
      finishDate: data.finishDate,
      task: data.task,
      isDone: false,
    };

    onAddTodo(todo);
    reset();
  };

  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      <InputDateComponent
        id="startDate"
        name="startDate"
        labelText="開始日"
        register={register}
        required
      />
      <InputDateComponent
        id="finishDate"
        name="finishDate"
        labelText="終了日"
        register={register}
        required
      />
      <InputTextComponent
        id="task"
        name="task"
        labelText="タスク内容"
        register={register}
        required
      />

      <input className="forms__submit" type="submit" value="追加" />
    </form>
  );
}

export default View;
