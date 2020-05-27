import React from "react";
import "./tileElement.scss";

export default function TileElement({ colorData, getChosenColor }) {
  const { id, status, color } = colorData;
  const cls = `tiles__element tiles__element-${color}${status ? "" : " hide"}${
    status ? " disabled" : ""
  }`;

  function clickHandler() {
    getChosenColor({ id: id, status: !status, color: color });
  }

  return (
    <div className={cls}>
      <div onClick={clickHandler}></div>
    </div>
  );
}
