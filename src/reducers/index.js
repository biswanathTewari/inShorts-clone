import { combineReducers } from "redux";
import { createReducer } from "redux-act";

import { setNews } from "../actions";

const newsReducer = createReducer(
  {
    [setNews]: (state, payload) => payload,
  },
  []
);

export default combineReducers({
  news: newsReducer,
});
