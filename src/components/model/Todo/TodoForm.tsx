/** @format */

import React from "react";
type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  reference: string;
  isEditing: string;
};
export const TodoForm = (props: Props) => {
  return (
    <div className="TodoForm">
      <form className="TodoForm__box" onSubmit={props.onSubmit}>
        <input
          className="TodoForm__input"
          type="text"
          placeholder="タスクを追加"
          value={props.value}
          onChange={props.onChange}
          ref={props.reference}
          required
        />
        <div className="btn-container">
          <button className="form__btn" type="submit">
            {!props.isEditing ? "＋" : "保存"}
          </button>
        </div>
      </form>
    </div>
  );
};
