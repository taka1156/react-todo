import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputType } from 'src/types/input';
import { Todo } from 'src/types/todo';
import BaseErrors from '../../BaseErrors/BaseErrors';
import BaseInputText from '../../BaseInputText/BaseInputText';
import '../forms.css';

type Props = {
  onAddTodo: (todo: Todo) => void;
};

type InputTodo = {
  startDate: string;
  finishDate: string;
  task: string;
};

const View = ({ onAddTodo }: Props): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<InputType>();
  const [errors, setErrors] = useState<string[]>([]);

  const validate = (values: InputTodo): number => {
    const tmp: string[] = [];

    if (values.startDate === '') {
      tmp.push('開始日が入っていません。');
    }

    if (values.finishDate === '') {
      tmp.push('終了日が入っていません。');
    }

    if (values.task === '') {
      tmp.push('タスクが入っていません。');
    }

    setErrors(tmp);
    return tmp.length;
  };

  const onSubmit = (values: InputTodo): void => {
    if (validate(values) === 0) {
      const todo: Todo = {
        index: 0,
        startDate: new Date(values.startDate),
        finishDate: new Date(values.finishDate),
        task: values.task,
        isDone: false,
      };
      onAddTodo(todo);
      reset();
    }
  };

  return (
    <>
      <BaseErrors errors={errors} />
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <BaseInputText
          id="startDate"
          name="startDate"
          labelText="開始日"
          type="date"
          register={register}
        />
        <BaseInputText
          id="finishDate"
          name="finishDate"
          labelText="終了日"
          type="date"
          register={register}
        />
        <BaseInputText
          id="task"
          name="task"
          labelText="タスク内容"
          type="text"
          register={register}
        />

        <input className="forms__submit" type="submit" value="追加" />
      </form>
    </>
  );
};

export default View;
