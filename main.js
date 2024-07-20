import { bindActionCreators, createStore } from "redux";
import reducer from "./reducer";
import * as action from "./actions";

const store = createStore(reducer);
const { getState, subscribe, dispatch } = store;

const updateUI = () => {
  document.querySelector("#counter").textContent = getState().count;
};

subscribe(updateUI);

const { inc, decr, rnd } = bindActionCreators(action, dispatch);

document.querySelector("#inc").addEventListener("click", inc);

document.querySelector("#decr").addEventListener("click", decr);

document.querySelector("#rnd").addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 100);
  rnd(randomValue);
});
