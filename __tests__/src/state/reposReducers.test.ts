import moment from "moment";

import {
  setIsError,
  setIsLoading,
  setLastUpdated,
  updateRepos,
} from "../../../src/actions/reposActions";
import {
  INITIAL_REPOS_STATE,
  reposReducers,
} from "../../../src/state/reposReducers";

describe("Reducers :: reposReducers", () => {
  test("should return the initial state", () => {
    expect(reposReducers(undefined, { type: undefined })).toEqual(
      INITIAL_REPOS_STATE
    );
  });

  describe("updateRepos", () => {
    test("should handle repos being added to the state", () => {
      const initialState: app.ReposState = INITIAL_REPOS_STATE;

      const mockRepositories: app.RepositoryItem[] = [
        {
          rank: 1,
          username: "Nutlope",
          repositoryName: "roomGPT",
          url: "https://github.com/Nutlope/roomGPT",
          description:
            "Upload a photo of your room to generate your dream room with AI.",
          language: "TypeScript",
          languageColor: "#3178c6",
          totalStars: 2940,
          forks: 227,
          starsSince: 806,
          since: "daily",
          builtBy: [
            {
              username: "Nutlope",
              url: "https://github.com/Nutlope",
              avatar:
                "https://avatars.githubusercontent.com/u/63742054?s=40&v=4",
            },
          ],
        },
      ];

      const expectedState: app.ReposState = {
        ...INITIAL_REPOS_STATE,
        trendingRepos: mockRepositories,
      };

      expect(
        reposReducers(initialState, updateRepos(mockRepositories))
      ).toEqual(expectedState);
    });
  });

  describe("setLastUpdated", () => {
    test("should handle updating lastUpdated date", () => {
      const initialState: app.ReposState = INITIAL_REPOS_STATE;

      const mockLastUpdated = moment().toISOString();

      const expectedState: app.ReposState = {
        ...INITIAL_REPOS_STATE,
        lastUpdated: mockLastUpdated,
      };

      expect(
        reposReducers(initialState, setLastUpdated(mockLastUpdated))
      ).toEqual(expectedState);
    });
  });

  describe("setIsLoading", () => {
    test("should handle updating isLoading", () => {
      const initialState: app.ReposState = INITIAL_REPOS_STATE;

      const expectedState: app.ReposState = {
        ...INITIAL_REPOS_STATE,
        isLoading: true,
      };

      expect(reposReducers(initialState, setIsLoading(true))).toEqual(
        expectedState
      );
    });
  });

  describe("setIsError", () => {
    test("should handle updating isError", () => {
      const initialState: app.ReposState = INITIAL_REPOS_STATE;

      const expectedState: app.ReposState = {
        ...INITIAL_REPOS_STATE,
        isError: true,
      };

      expect(reposReducers(initialState, setIsError(true))).toEqual(
        expectedState
      );
    });
  });
});
