import React from 'react';
import './BaseInputCheckbox.css';

type Props = {
  isDone: boolean;
  onCheck: () => void;
};

const View = ({ isDone, onCheck }: Props): JSX.Element => {
  return (
    <input
      className="base-input-checkbox"
      type="checkbox"
      checked={isDone}
      onChange={onCheck}
    />
  );
};

export default View;
