import { call, all } from "@redux-saga/core/effects";

import { reposRuntime } from "./reposSagas";

export function* rootSaga() {
  yield all([call(reposRuntime)]);
}
