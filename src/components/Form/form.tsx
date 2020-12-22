import React from 'react';
import { InputTodo } from 'src/types/todo';
import InputDateComponent from '../InputDate/inputDate';
import InputTextComponent from '../InputText/inputText';
import './form.css';

type Props = {
  isSearch: boolean;
  onAddTodo: (todo: InputTodo) => void;
  onTextSearch: (searchText: string) => void;
};

function View({ isSearch, onAddTodo, onTextSearch }: Props) {
  let inputTodo: InputTodo = {
    startDate: null,
    finishDate: null,
    task: '',
  };

  let searchText: string = '';

  const setParentStartDate = (date: Date): void => {
    inputTodo.startDate = date;
  };

  const setParentFinishDate = (date: Date): void => {
    inputTodo.finishDate = date;
  };

  const setParentTask = (text: string): void => {
    inputTodo.task = text;
  };

  const handleSubmitAdd = (e: any): void => {
    e.preventDefault();
    onAddTodo(inputTodo);
  };

  const setParentSearchText = (searchWord: string): void => {
    searchText = searchWord;
  };

  const handleSubmitTextSearch = (e: any): void => {
    e.preventDefault();
    onTextSearch(searchText);
  };

  if (!isSearch) {
    return (
      <form className="forms" onSubmit={(e) => handleSubmitAdd(e)}>
        <InputDateComponent
          id="startDate"
          labelText="開始日"
          setParentDate={setParentStartDate}
        />
        <InputDateComponent
          id="finishDate"
          labelText="終了日"
          setParentDate={setParentFinishDate}
        />
        <InputTextComponent
          labelText="タスク内容"
          setParentText={setParentTask}
        />

        <input className="forms__submit" type="submit" value="追加" />
      </form>
    );
  } else {
    return (
      <form className="forms" onSubmit={(e) => handleSubmitTextSearch(e)}>
        <InputTextComponent
          labelText="検索"
          setParentText={setParentSearchText}
        />
        <input className="forms__submit" type="submit" value="検索" />
      </form>
    );
  }
}

export default View;
