import React from 'react';
import './BaseInputCheckbox.css';

type Props = {
  isDone: boolean;
  onCheck: () => void;
};

function View({ isDone, onCheck }: Props): JSX.Element {
  return (
    <input
      type="checkbox"
      className="base-input-checkbox"
      checked={isDone}
      onChange={onCheck}
    />
  );
}

export default View;
