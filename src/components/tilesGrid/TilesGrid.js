import React, { useEffect, useState } from "react";
import TileElement from "../tileElement";
import "./tilesGrid.scss";
import { useDispatch, useSelector } from "react-redux";
import { setColorStatus, closeColors, isWin } from "../../redux/actions";

export default function TilesGrid() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors);
  const [chosenColor, setChosenColor] = useState([]);
  const colorsForComparison = 2;

  useEffect(() => {
    if (chosenColor.length === colorsForComparison) {
      if (chosenColor[0].color === chosenColor[1].color) {
        setChosenColor([]);
      } else {
        setChosenColor([]);
        setTimeout(() => {
          dispatch(closeColors(chosenColor));
        }, 500);
      }
    }
    if(colors.every((e) => e.status === true)) {
      dispatch(isWin(true))
    }
  }, [dispatch, colors, chosenColor]);

  const getChosenColor = ({ id, status, color }) => {
    if (chosenColor.length === colorsForComparison) {
      setChosenColor([]);
    } else {
      setChosenColor([...chosenColor, { id, color }]);
    }

    dispatch(setColorStatus(id, status));
  };
  return (
    <div className="tiles__grid">
      {colors.map((color) => {
        return (
          <TileElement
            colorData={color}
            key={color.id}
            getChosenColor={getChosenColor}
          />
        );
      })}
    </div>
  );
}
