import React, { useState } from 'react';
import FormComponent from '../form/form';
import './forms.css';

type Props = {
  onClick: (e: any) => void;
  btnText: string;
};

function BaseBtn(props: Props) {
  return <button onClick={props.onClick}>{props.btnText}</button>;
}

function View() {
  const [isSearch, stateChange] = useState(false);

  return (
    <div>
      <BaseBtn
        onClick={(e) => stateChange(!isSearch)}
        btnText={isSearch ? 'タスク追加' : 'タスク検索'}
      />
      <form className="forms">
        <FormComponent isSearch={isSearch} />
      </form>
    </div>
  );
}

export default View;
