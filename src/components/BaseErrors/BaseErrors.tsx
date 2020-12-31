import React from 'react';
import './BaseErrors.css';

type Props = {
  errors: string[];
};

const View = ({ errors }: Props): JSX.Element => {
  return (
    <>
      {errors.map((error, i) => (
        <p className="base-errors" key={`error_${i}`}>
          {error}
        </p>
      ))}
    </>
  );
};

export default View;
