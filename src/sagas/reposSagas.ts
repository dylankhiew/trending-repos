import { call, put, takeEvery } from "@redux-saga/core/effects";

import { getApi } from "./apiSagas";
import { requestRepoUpdate, updateRepos } from "../actions/reposActions";
import { API_ENDPOINTS } from "../constants/apiConstants";

function* updateReposSaga() {
  try {
    const repos: app.RepositoryItem[] = yield call(
      getApi,
      API_ENDPOINTS.TRENDING_URL
    );

    console.log("success");
    yield put(updateRepos(repos));
  } catch {
    // Do nothing for now
    console.log("failed");
  }
}

export function* reposRuntime() {
  yield takeEvery(requestRepoUpdate.toString(), updateReposSaga);
}
