import React from 'react';
import { useForm } from 'react-hook-form';
import { InputTodo } from 'src/types/todo';
import { InputType } from 'src/types/input';
import InputDateComponent from '../../InputDate/inputDate';
import InputTextComponent from '../../InputText/inputText';
import './forms.css';

type Props = {
  onAddTodo: (todo: InputTodo) => void;
};

function View({ onAddTodo }: Props) {
  const { register, handleSubmit, reset } = useForm<InputType>();

  const onSubmit = (data: InputTodo) => {
    onAddTodo(data);
    reset()
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
