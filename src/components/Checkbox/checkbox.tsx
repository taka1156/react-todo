import React from 'react';
import './checkbox.css';

type Props = {
  isDone: boolean;
  onCheck: () => void;
};

function View({ isDone, onCheck }: Props) {
  return <input type="checkbox" checked={isDone} onChange={onCheck} />;
}

export default View;
