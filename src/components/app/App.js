import React, { useEffect, useState } from "react";
import TilesGrid from "../tilesGrid";
import "./app.scss";
import { useSelector } from "react-redux";

export default function App() {
  const colors = useSelector((state) => state.colors);
  const [win, setWin] = useState(false)
  useEffect(() => {
    setWin(colors.every((e) => e.status === true))
  }, [colors]);

  return (
    <div className="tiles">
      <h2>Tiles game</h2>

      <TilesGrid />

      {win && (
        <div className="tiles__win">
          <h3>
            Congratulations
            <br />
            you win!
          </h3>
        </div>
      )}
    </div>
  );
}
