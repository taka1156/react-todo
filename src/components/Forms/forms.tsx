import React, { useState } from 'react';
import FormComponent from '../Form/form';
import './forms.css';

type Props = {
  className?: String;
  btnText: string;
  onClick: (e: any) => void;
};

function BaseBtn({ onClick, btnText, className }: Props) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {btnText}
    </button>
  );
}

function View() {
  const [isSearch, stateChange] = useState(false);

  const seachTextDummy = () => {
    return '検索';
  };

  const addTodoDummy = () => {
    return '追加';
  };

  const handleSubmit = (e: any) => {
    console.log(isSearch ? seachTextDummy() : addTodoDummy());
    e.preventDefault();
  };

  return (
    <div>
      <BaseBtn
        onClick={(e) => stateChange(!isSearch)}
        btnText={!isSearch ? 'タスク検索' : 'タスク追加'}
      />
      <form className="forms" onSubmit={handleSubmit}>
        <FormComponent isSearch={isSearch} />
        <input
          className="forms__submit"
          type="submit"
          value={isSearch ? '検索' : '追加'}
        />
      </form>
    </div>
  );
}

export default View;
