import React from 'react';
import { useForm } from 'react-hook-form';
import { InputType } from 'src/types/input';
import InputTextComponent from '../../InputText/inputText';
import './forms.css';

type Props = {
  onTextSearch: (searchText: string) => void;
};

function View({ onTextSearch }: Props) {
  const { register, handleSubmit } = useForm<InputType>();

  const onSubmit = (data: string | any) => {
    if (typeof data === 'string') {
      onTextSearch(data);
    }
  };

  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      <InputTextComponent
        id="search"
        name="searchText"
        labelText="検索"
        register={register}
        required
      />
      <input className="forms__submit" type="submit" value="検索" />
    </form>
  );
}

export default View;
