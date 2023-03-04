/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace app {
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

  type GetTrendingRepoResponse = RepositoryItem[];
}
