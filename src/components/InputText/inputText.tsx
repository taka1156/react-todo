import React, { useState } from 'react';
import './inputText.css';

type Props = {
  labelText: string;
  setParentText: (text: string) => void;
};

function View({ labelText, setParentText }: Props) {
  const [text, setText] = useState('');

  const handleChange = (e: any): void => {
    setText(e.target.value);
    setParentText(e.target.value);
  };

  return (
    <div className="forms__box">
      <label className="forms__label" htmlFor="task">
        {labelText}
      </label>
      <input
        className="forms__input"
        id="task"
        type="text"
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default View;
