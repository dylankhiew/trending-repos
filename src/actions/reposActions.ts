import { createAction } from '@reduxjs/toolkit';

export const REQUEST_REPO_UPDATE = 'REQUEST_REPO_UPDATE';
export const UPDATE_REPOS = 'UPDATE_REPOS';

export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_IS_ERROR = 'SET_IS_ERROR';

export const SET_LAST_UPDATED = 'SET_LAST_UPDATED';

export const TOGGLE_DISPLAY_SORT_MENU = 'TOGGLE_DISPLAY_SORT_MENU';

export const SET_REPO_SORTING_METHOD = 'SET_REPO_SORTING_METHOD';

const requestRepoUpdate =
  createAction<app.RequestRepoUpdatePayload>(REQUEST_REPO_UPDATE);
const updateRepos = createAction<app.RepositoryItem[]>(UPDATE_REPOS);

const setIsLoading = createAction<boolean>(SET_IS_LOADING);
const setIsError = createAction<boolean>(SET_IS_ERROR);

const setLastUpdated = createAction<string>(SET_LAST_UPDATED);

const toggleDisplaySortMenu = createAction(TOGGLE_DISPLAY_SORT_MENU);

const setRepoSortingMethod = createAction<app.RepoSortingMethod>(
  SET_REPO_SORTING_METHOD,
);

export {
  requestRepoUpdate,
  updateRepos,
  setIsLoading,
  setIsError,
  setLastUpdated,
  toggleDisplaySortMenu,
  setRepoSortingMethod,
};
