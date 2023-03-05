import { createAction } from "@reduxjs/toolkit";

export const REQUEST_REPO_UPDATE = "REQUEST_REPO_UPDATE";
export const UPDATE_REPOS = "UPDATE_REPOS";

export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_IS_ERROR = "SET_IS_ERROR";

export const SET_LAST_UPDATED = "SET_LAST_UPDATED";

const requestRepoUpdate = createAction(REQUEST_REPO_UPDATE);
const updateRepos = createAction<app.RepositoryItem[]>(UPDATE_REPOS);

const setIsLoading = createAction<boolean>(SET_IS_LOADING);
const setIsError = createAction<boolean>(SET_IS_ERROR);

const setLastUpdated = createAction<string>(SET_LAST_UPDATED);

export {
  requestRepoUpdate,
  updateRepos,
  setIsLoading,
  setIsError,
  setLastUpdated,
};
