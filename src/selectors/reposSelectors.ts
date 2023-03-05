import { createSelector } from "reselect";

export const appState = (state: app.State) => state;

export const reposStateSelector = createSelector(
  appState,
  (state) => state.repos
);

export const trendingReposSelector = createSelector(
  reposStateSelector,
  (repos) => repos.trendingRepos
);

export const repoLastUpdatedSelector = createSelector(
  reposStateSelector,
  (repos) => repos.lastUpdated
);