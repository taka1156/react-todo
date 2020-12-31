import React from 'react';
import { InputType } from 'src/types/input';
import './BaseInputText.css';

const View = ({
  id,
  name,
  labelText,
  type,
  register,
}: InputType): JSX.Element => {
  return (
    <div className="form__box">
      <label className="form__label" htmlFor={id}>
        {labelText}
      </label>
      <input
        className="form__input"
        id={id}
        name={name}
        type={type}
        ref={register}
      />
    </div>
  );
};

export default View;
