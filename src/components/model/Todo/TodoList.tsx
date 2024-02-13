/** @format */

import React from "react";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export const TodoList = (props: Props) => {
  return <ul className="TodoList">{props.children}</ul>;
};
