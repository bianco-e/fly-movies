import React from "react";
import "./App.css";
import Home from "./pages/Home";
import moviesReducer from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(moviesReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
