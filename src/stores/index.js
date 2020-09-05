import { createStore } from "redux";
import rootReducer from "../reducers/listReducer";

const store = createStore(rootReducer);

export default store;
