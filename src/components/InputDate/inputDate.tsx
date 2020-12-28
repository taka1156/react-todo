import React from 'react';
import { InputType } from 'src/types/input';
import './inputDate.css';

function View({ id, name, labelText, register, required }: InputType) {

  return (
    <div className="forms__box">
      <label className="forms__label" htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        name={name}
        type="date"
        className="forms__input"
        ref={register({ required })}
      />
    </div>
  );
}

export default View;
