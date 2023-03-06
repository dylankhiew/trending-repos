import { combineReducers } from 'redux';

import { reposReducers } from './reposReducers';

export const rootReducer = combineReducers({
  repos: reposReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
