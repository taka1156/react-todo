import React, { useState } from 'react';
import { InputTodo } from 'src/types/todo';
import FormComponent from '../Form/form';
import ButtonComponent from '../Button/button';
import './forms.css';

type Props = {
  onAddTodo: (todo: InputTodo) => void;
  onTextSearch: (searchText: string) => void;
};

function View({ onAddTodo, onTextSearch }: Props) {
  const [isSearch, stateChange] = useState(false);

  return (
    <div>
      <ButtonComponent
        onClick={(e) => stateChange(!isSearch)}
        btnText={!isSearch ? 'タスク検索' : 'タスク追加'}
      />
      <FormComponent isSearch={isSearch} onAddTodo={onAddTodo} onTextSearch={onTextSearch} />
    </div>
  );
}

export default View;
