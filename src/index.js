import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { createStore, applyMiddleware, compose } from "redux";
import { tilesReducer } from "./redux/tilesReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import colors from "./colors";
import "./global/global.scss";

const store = createStore(
  tilesReducer,
  {colors},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
