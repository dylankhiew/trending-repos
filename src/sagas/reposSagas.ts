import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import moment from 'moment';

import { getApi } from './apiSagas';
import {
  requestRepoUpdate,
  setIsError,
  setIsLoading,
  setLastUpdated,
  setRepoSortingMethod,
  toggleDisplaySortMenu,
  updateRepos,
} from '../actions/reposActions';
import { API_ENDPOINTS } from '../constants/apiConstants';
import { shouldFetchReposSelector } from '../selectors/reposSelectors';

function* updateReposSaga(action: ReturnType<typeof requestRepoUpdate>) {
  const shouldFetchRepos: boolean = yield select(shouldFetchReposSelector);
  const shouldForceUpdate = action.payload.shouldForceUpdate;

  if (shouldFetchRepos || shouldForceUpdate) {
    yield put(setIsLoading(true));
    try {
      const repos: app.RepositoryItem[] = yield call(
        getApi,
        API_ENDPOINTS.TRENDING_URL,
      );
      yield put(updateRepos(repos));
      yield put(setIsError(false));
      yield put(setLastUpdated(moment().toISOString()));
      yield put(setIsLoading(false));
    } catch {
      yield put(setIsLoading(false));
      yield put(setIsError(true));
    }
  } else {
    // Do nothing for now
  }
}

function* setRepoSortingMethodSaga() {
  // Hides the sort menu when user clicks on the sort for better experience
  yield put(toggleDisplaySortMenu());
}

export function* reposRuntime() {
  yield takeEvery(requestRepoUpdate.toString(), updateReposSaga);
  yield takeEvery(setRepoSortingMethod.toString(), setRepoSortingMethodSaga);
}
