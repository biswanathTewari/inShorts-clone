import { createAction } from "redux-act";

const getNews = createAction("GETNEWS");
const setNews = createAction("SETNEWS");

export { getNews, setNews };
