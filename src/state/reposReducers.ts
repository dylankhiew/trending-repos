import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { setLastUpdated, updateRepos } from "../actions/reposActions";

const INITIAL_REPOS_STATE: app.ReposState = {
  trendingRepos: [],
  lastUpdated: "",
};

export const reposReducers = createReducer(INITIAL_REPOS_STATE, (builder) =>
  builder
    .addCase(
      updateRepos,
      (state, action: PayloadAction<app.RepositoryItem[]>) => {
        return {
          ...state,
          trendingRepos: action.payload,
        };
      }
    )
    .addCase(setLastUpdated, (state, action: PayloadAction<string>) => {
      return {
        ...state,
        lastUpdated: action.payload,
      };
    })
);
