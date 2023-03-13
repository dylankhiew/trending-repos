import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import {
  setIsError,
  setIsLoading,
  setLastUpdated,
  setRepoSortingMethod,
  toggleDisplaySortMenu,
  updateRepos,
} from '../actions/reposActions';

export const INITIAL_REPOS_STATE: app.ReposState = {
  trendingRepos: [],
  lastUpdated: '',
  isLoading: false,
  isError: false,
  shouldShowSortMenu: false,
  sortingMethod: 'STARS',
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
      },
    )
    .addCase(setLastUpdated, (state, action: PayloadAction<string>) => {
      return {
        ...state,
        lastUpdated: action.payload,
      };
    })
    .addCase(setIsLoading, (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    })
    .addCase(setIsError, (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isError: action.payload,
      };
    })
    .addCase(toggleDisplaySortMenu, (state) => {
      return {
        ...state,
        shouldShowSortMenu: !state.shouldShowSortMenu,
      };
    })
    .addCase(
      setRepoSortingMethod,
      (state, action: PayloadAction<app.RepoSortingMethod>) => {
        return {
          ...state,
          sortingMethod: action.payload,
        };
      },
    ),
);
