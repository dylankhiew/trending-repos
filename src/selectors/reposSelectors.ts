import moment from 'moment';
import { createSelector } from 'reselect';

export const appState = (state: app.State) => state;

export const reposStateSelector = createSelector(
  appState,
  (state) => state.repos,
);

export const trendingReposSelector = createSelector(
  reposStateSelector,
  (repos) => repos.trendingRepos,
);

export const repoSortingMethodSelector = createSelector(
  reposStateSelector,
  (repos) => repos.sortingMethod,
);

export const sortedTrendingReposSelector = createSelector(
  trendingReposSelector,
  repoSortingMethodSelector,
  (trendingRepos, sortingMethod): app.RepositoryItem[] => {
    if (sortingMethod === 'NAME') {
      // Slice is needed as the trendingRepos array is read-only
      return trendingRepos
        .slice()
        .sort((a, b) => a.repositoryName.localeCompare(b.repositoryName));
    }

    if (sortingMethod === 'STARS') {
      return trendingRepos.slice().sort((a, b) => a.totalStars - b.totalStars);
    }

    return [];
  },
);

export const repoLastUpdatedSelector = createSelector(
  reposStateSelector,
  (repos) => repos.lastUpdated,
);

export const repoIsLoadingSelector = createSelector(
  reposStateSelector,
  (repos) => repos.isLoading,
);

export const repoIsErrorSelector = createSelector(
  reposStateSelector,
  (repos) => repos.isError,
);

export const shouldFetchReposSelector = createSelector(
  repoLastUpdatedSelector,
  (lastUpdated) => {
    if (!lastUpdated) {
      return true;
    }

    const current = moment();
    return current.diff(moment(lastUpdated), 'hours') > 2;
  },
);

export const shouldShowSortMenuSelector = createSelector(
  reposStateSelector,
  (repos) => repos.shouldShowSortMenu,
);
