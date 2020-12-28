import React from 'react';
import './BaseBtn.css';

type Props = {
  className?: string;
  btnText: string;
  onClick: (e: any) => void;
};

function View({ className, btnText, onClick }: Props) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default View;
