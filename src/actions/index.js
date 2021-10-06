import { createAction } from "redux-act";

const getNews = createAction("GETNEWS");
const setNews = createAction("SETNEWS");
const toggleDarkMode = createAction("TOGGLEDARKMODE");

export { getNews, setNews, toggleDarkMode };
