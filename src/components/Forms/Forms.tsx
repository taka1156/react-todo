import React, { useState } from 'react';
import { Todo } from 'src/types/todo';
import AddForm from '../Form/TodoAddForm/TodoAddForm';
import SearchForm from '../Form/TodoSearchForm/TodoSearchForm';
import BaseBtn from '../BaseBtn/BaseBtn';
import './Forms.css';

type Props = {
  onAddTodo: (todo: Todo) => void;
  onSearchTodo: (searchText: string) => void;
};

const View = ({ onAddTodo, onSearchTodo }: Props): JSX.Element => {
  const [isSearch, stateChange] = useState(false);

  const modeChange = (): void => {
    stateChange(!isSearch);
    onSearchTodo(''); //初期化
  };

  return (
    <div>
      <BaseBtn
        onClick={() => modeChange()}
        btnText={!isSearch ? 'タスク検索' : 'タスク追加'}
      />
      {!isSearch ? (
        <AddForm onAddTodo={onAddTodo} />
      ) : (
        <SearchForm onSearchTodo={onSearchTodo} />
      )}
    </div>
  );
};

export default View;
