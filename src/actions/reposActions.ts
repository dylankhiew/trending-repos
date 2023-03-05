import { createAction } from "@reduxjs/toolkit";

export const UPDATE_REPOS = "UPDATE_REPOS";
export const SET_LAST_UPDATED = "SET_LAST_UPDATED";

const updateRepos = createAction<app.RepositoryItem[]>(UPDATE_REPOS);
const setLastUpdated = createAction<string>(SET_LAST_UPDATED);

export { updateRepos, setLastUpdated };
