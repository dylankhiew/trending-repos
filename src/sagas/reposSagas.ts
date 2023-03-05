import { call, put, select, takeEvery } from "@redux-saga/core/effects";

import { getApi } from "./apiSagas";
import {
  requestRepoUpdate,
  setIsError,
  setIsLoading,
  updateRepos,
} from "../actions/reposActions";
import { API_ENDPOINTS } from "../constants/apiConstants";

function* updateReposSaga() {
  // TO-DO: Do Should update check here
  yield put(setIsLoading(true));
  try {
    const repos: app.RepositoryItem[] = yield call(
      getApi,
      API_ENDPOINTS.TRENDING_URL
    );
    yield put(updateRepos(repos));
    yield put(setIsLoading(false));
  } catch {
    yield put(setIsLoading(false));
    yield put(setIsError(true));
  }
}

export function* reposRuntime() {
  yield takeEvery(requestRepoUpdate.toString(), updateReposSaga);
}
