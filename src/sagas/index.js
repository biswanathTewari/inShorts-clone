import { takeEvery, all, call, put } from "@redux-saga/core/effects";

import { getNews, setNews } from "../actions";
import { getNewsAPI, getSourceAPI, fetchNews } from "../util/api";

function* onGetNews(action) {
  const {
    topic = "general",
    jumpTo,
    type = "category",
    isFromFeed,
  } = action.payload;
  try {
    let api =
      type == "category" ? yield getNewsAPI(topic) : yield getSourceAPI(topic);
    const res = yield call(fetchNews, api);
    yield put(setNews(res.articles));
    if (!isFromFeed) jumpTo("feed");
  } catch (err) {
    console.log("something went wrong");
  }
}

function* onGetNewsFork() {
  yield takeEvery(getNews, onGetNews);
}

export default function* () {
  yield all([onGetNewsFork()]);
}
