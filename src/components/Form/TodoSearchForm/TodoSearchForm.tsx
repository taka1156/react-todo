import React from 'react';
import { useForm } from 'react-hook-form';
import { InputType } from 'src/types/input';
import BaseInputText from '../../BaseInputText/BaseInputText';
import '../forms.css';

type Props = {
  onSearchTodo: (searchText: string) => void;
};

type InputSearch = {
  searchText: string;
};

const View = ({ onSearchTodo }: Props): JSX.Element => {
  const { register, handleSubmit } = useForm<InputType>();

  const onSubmit = (data: InputSearch): void => {
    onSearchTodo(data.searchText);
  };

  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      <BaseInputText
        id="search"
        name="searchText"
        labelText="検索"
        type="text"
        register={register}
      />
      <input className="forms__submit" type="submit" value="検索" />
    </form>
  );
};

export default View;
