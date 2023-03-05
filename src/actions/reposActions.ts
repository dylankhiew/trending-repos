import { createAction } from "@reduxjs/toolkit";

export const REQUEST_REPO_UPDATE = "REQUEST_REPO_UPDATE";
export const UPDATE_REPOS = "UPDATE_REPOS";
export const SET_LAST_UPDATED = "SET_LAST_UPDATED";

const requestRepoUpdate = createAction(REQUEST_REPO_UPDATE);
const updateRepos = createAction<app.RepositoryItem[]>(UPDATE_REPOS);
const setLastUpdated = createAction<string>(SET_LAST_UPDATED);

export { requestRepoUpdate, updateRepos, setLastUpdated };
