import React from "react";
import TilesGrid from "../tilesGrid";
import "./app.scss";
import { useSelector, useDispatch } from "react-redux";
import { startGame, newGame } from "../../redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.startGame);
  const win = useSelector((state) => state.isWin);

  return (
    <div className="tiles">
      <h2>Tiles game</h2>

      {start ? (
        <TilesGrid />
      ) : (
        <button
          className="tiles__start"
          onClick={() => dispatch(startGame(true))}
        >
          Start Game
        </button>
      )}

      {win && (
        <div className="tiles__win">
          <h3>
            Congratulations
            <br />
            you win!
          </h3>

          <h4>
            New game? <button onClick={() => dispatch(newGame())}>start</button>
          </h4>
        </div>
      )}
    </div>
  );
}
