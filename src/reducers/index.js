import { combineReducers } from "redux";
import { createReducer } from "redux-act";

import { setNews, toggleDarkMode } from "../actions";

const newsReducer = createReducer(
  {
    [setNews]: (state, payload) => payload,
  },
  []
);

const darkModeReducer = createReducer(
  {
    [toggleDarkMode]: (state) => !state,
  },
  true
);

export default combineReducers({
  news: newsReducer,
  darkMode: darkModeReducer,
});
