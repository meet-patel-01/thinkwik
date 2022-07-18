import { createStore } from "redux";
import { AppReducer } from "./Reducer";

const Store = createStore(AppReducer)
export default Store