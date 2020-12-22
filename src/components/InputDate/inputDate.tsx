import React, { useState } from 'react';
import './inputDate.css';

type Props = {
  id: string;
  labelText: string;
  setParentDate: (date: Date) => void;
};

const convetDateToIso = (d: Date): string => {
  const shift = d.getTime() + 9 * 60 * 60 * 1000;
  const time = new Date(shift).toISOString().split('.')[0];
  return time;
};

function View({ id, labelText, setParentDate }: Props) {
  const [date, setDate] = useState(convetDateToIso(new Date()));

  const handleChange = (e: any): void => {
    setDate(e.target.value);
    setParentDate(e.target.value);
  };

  return (
    <div className="forms__box">
      <label className="forms__label" htmlFor={id}>
        {labelText}
      </label>
      <input
        className="forms__input"
        id={id}
        type="date"
        value={date}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default View;
