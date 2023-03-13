/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace app {
  interface State {
    repos: ReposState;
  }

  interface ReposState {
    trendingRepos: RepositoryItem[];
    lastUpdated: string;
    isLoading: boolean;
    isError: boolean;
    shouldShowSortMenu: boolean;
    sortingMethod: RepoSortingMethod;
  }

  interface RepositoryAuthor {
    username: string;
    url: string;
    avatar: string;
  }

  interface RepositoryItem {
    rank: number;
    username: string;
    repositoryName: string;
    url: string;
    description: string;
    language: string;
    languageColor: string;
    totalStars: number;
    forks: number;
    starsSince: number;
    since: string;
    builtBy: RepositoryAuthor[];
  }

  interface RequestRepoUpdatePayload {
    shouldForceUpdate: boolean;
  }

  type RepoSortingMethod = 'STARS' | 'NAME';
}
