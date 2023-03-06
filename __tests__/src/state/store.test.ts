import { INITIAL_REPOS_STATE } from "../../../src/state/reposReducers";
import { store } from "../../../src/state/store";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("redux-persist", () => {
  const real = jest.requireActual("redux-persist");
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((_config, reducers) => reducers),
  };
});

describe("Redux Store :: repos", () => {
  it("Should set repos to initial state", () => {
    const state = store.getState().repos;
    expect(state).toEqual(INITIAL_REPOS_STATE);
  });
});
