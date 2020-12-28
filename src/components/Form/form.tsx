import React from 'react';
import { InputTodo } from 'src/types/todo';
import AddFormComponent from './AddForm/addForm';
import SearchFormComponent from './SearchForm/searchForm';
import './form.css';

type Props = {
  isSearch: boolean;
  onAddTodo: (todo: InputTodo) => void;
  onTextSearch: (searchText: string) => void;
};

function View({ isSearch, onAddTodo, onTextSearch }: Props) {

  if (!isSearch) {
    return <AddFormComponent onAddTodo={onAddTodo} />;
  } else {
    return <SearchFormComponent onTextSearch={onTextSearch} />;
  }
}

export default View;
