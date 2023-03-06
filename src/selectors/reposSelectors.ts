import moment from 'moment';
import { createSelector } from 'reselect';

export const appState = (state: app.State) => state;

export const reposStateSelector = createSelector(
  appState,
  state => state.repos,
);

export const trendingReposSelector = createSelector(
  reposStateSelector,
  repos => repos.trendingRepos,
);

export const repoLastUpdatedSelector = createSelector(
  reposStateSelector,
  repos => repos.lastUpdated,
);

export const repoIsLoadingSelector = createSelector(
  reposStateSelector,
  repos => repos.isLoading,
);

export const repoIsErrorSelector = createSelector(
  reposStateSelector,
  repos => repos.isError,
);

export const shouldFetchReposSelector = createSelector(
  repoLastUpdatedSelector,
  lastUpdated => {
    if (!lastUpdated) {
      return true;
    }

    const current = moment();
    return current.diff(moment(lastUpdated), 'hours') > 2;
  },
);
