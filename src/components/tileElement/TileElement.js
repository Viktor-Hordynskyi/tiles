import React from "react";
import "./tileElement.scss";

export default function TileElement({ colorData, isDisabled, getChosenColor }) {
  const { id, status, color } = colorData;
  const cls = `tiles__element tiles__element-${color}${status ? "" : " hide"}${
    isDisabled||status ? " disabled" : ""
  }`;

  function clickHandler() {
    getChosenColor({ id: id, status: !status, color: color });
  }

  return <div className={cls} onClick={clickHandler}></div>;
}
