import React from 'react';
import './BaseBtn.css';

type Props = {
  btnText: string;
  onClick: () => void;
};

function View({ btnText, onClick }: Props): JSX.Element {
  return (
    <button className="base-btn" onClick={onClick}>
      {btnText}
    </button>
  );
}

export default View;
