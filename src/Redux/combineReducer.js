import { combineReducers } from "redux";
import { reducers } from "./Reducers";
import { addCategore } from "./Reducers";
import { tabsItem } from "./Reducers";

const rooReducer = combineReducers({
  data: reducers,
  Item: addCategore,
  tabs: tabsItem,
});

export default rooReducer;
