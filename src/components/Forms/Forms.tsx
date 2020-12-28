import React, { useState } from 'react';
import { Todo } from 'src/types/todo';
import AddFormComponent from '../Form/TodoAddForm/TodoAddForm';
import SearchFormComponent from '../Form/TodoSearchForm/TodoSearchForm';
import ButtonComponent from '../BaseBtn/BaseBtn';
import './Forms.css';

type Props = {
  onAddTodo: (todo: Todo) => void;
  onSearchTodo: (searchText: string) => void;
};

function View({ onAddTodo, onSearchTodo }: Props) {
  const [isSearch, stateChange] = useState(false);

  const modeChange = () => {
    stateChange(!isSearch);
    onSearchTodo(''); //初期化
  };

  return (
    <div>
      <ButtonComponent
        onClick={(e) => modeChange()}
        btnText={!isSearch ? 'タスク検索' : 'タスク追加'}
      />
      {!isSearch ? (
        <AddFormComponent onAddTodo={onAddTodo} />
      ) : (
        <SearchFormComponent onSearchTodo={onSearchTodo} />
      )}
    </div>
  );
}

export default View;
