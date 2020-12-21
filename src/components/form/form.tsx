import React from 'react';
import './form.css';

type Props = {
  isSearch: boolean;
};

function View(props: Props) {
  if (!props.isSearch) {
    return (
      <>
        <div className="forms__box">
          <label className="forms__label" htmlFor="start-day">
            開始日
          </label>
          <input className="forms__input" id="start-day" type="date" />
        </div>
        <div className="forms__box">
          <label className="forms__label" htmlFor="finish-day">
            終了日
          </label>
          <input className="forms__input" id="finish-day" type="date" />
        </div>
        <div className="forms__box">
          <label className="forms__label" htmlFor="task">
            タスクの内容
          </label>
          <input className="forms__input" id="task" type="text" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="forms__box">
          <label className="forms__label" htmlFor="search-text">
            検索
          </label>
          <input className="forms__input" id="search-text" type="text" />
        </div>
      </>
    );
  }
}

export default View;
