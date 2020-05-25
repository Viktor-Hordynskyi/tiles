import React, { useEffect, useState } from "react";
import TileElement from "../tileElement";
import "./tilesGrid.scss";
import { useDispatch, useSelector } from "react-redux";
import { setColorStatus, closeColors } from "../../redux/actions";

export default function TilesGrid() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors);
  const [color1, setColor1] = useState({});
  const [color2, setColor2] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (Object.entries(color1).length && Object.entries(color2).length) {
      if (color1.color === color2.color) {
        setColor1({});
        setColor2({});
        setTimeout(() => {
          setIsDisabled(!isDisabled);
        }, 500);
      } else {
        setColor1({});
        setColor2({});
        setTimeout(() => {
          dispatch(closeColors([color1, color2]));
          setIsDisabled(!isDisabled);
        }, 500);
      }
    }
    colors.every((e) => e.status === true)
  }, [dispatch, colors, color1, color2, isDisabled]);

  const getChosenColor = ({ id, status, open, color }) => {
    if (color1.id === id) {
      setColor1({});
    } else {
      if (!Object.entries(color1).length) {
        if (color2.id === id) {
          setColor2({});
        } else {
          setColor1({ id, color });
        }
      } else {
        if (color2.id === id) {
          setColor2({});
        } else {
          setColor2({ id, color });
          setIsDisabled(!isDisabled);
        }
      }
    }
    dispatch(setColorStatus(id, status, open));
  };
  return (
    <div className="tiles__grid">
      {colors.map((color) => {
        return (
          <TileElement
            colorData={color}
            key={color.id}
            isDisabled={isDisabled}
            getChosenColor={getChosenColor}
          />
        );
      })}
    </div>
  );
}
