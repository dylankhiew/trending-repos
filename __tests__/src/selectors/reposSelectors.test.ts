import {
  repoIsErrorSelector,
  repoIsLoadingSelector,
  repoLastUpdatedSelector,
  repoSortingMethodSelector,
  reposStateSelector,
  shouldFetchReposSelector,
  shouldShowSortMenuSelector,
  sortedTrendingReposSelector,
  trendingReposSelector,
} from '../../../src/selectors/reposSelectors';

const mockTrendingRepos: app.RepositoryItem[] = [
  {
    rank: 1,
    username: 'Nutlope',
    repositoryName: 'Pineapple',
    url: 'https://github.com/Nutlope/roomGPT',
    description:
      'Upload a photo of your room to generate your dream room with AI.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    totalStars: 2940,
    forks: 227,
    starsSince: 5000,
    since: 'daily',
    builtBy: [
      {
        username: 'Nutlope',
        url: 'https://github.com/Nutlope',
        avatar: 'https://avatars.githubusercontent.com/u/63742054?s=40&v=4',
      },
    ],
  },
  {
    rank: 3,
    username: 'Nutlope',
    repositoryName: 'Apple',
    url: 'https://github.com/Nutlope/roomGPT',
    description:
      'Upload a photo of your room to generate your dream room with AI.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    totalStars: 3000,
    forks: 227,
    starsSince: 806,
    since: 'daily',
    builtBy: [
      {
        username: 'Nutlope',
        url: 'https://github.com/Nutlope',
        avatar: 'https://avatars.githubusercontent.com/u/63742054?s=40&v=4',
      },
    ],
  },
];

const mockState: app.State = {
  repos: {
    trendingRepos: mockTrendingRepos,
    lastUpdated: '2023-03-06T05:44:56.381Z',
    isLoading: false,
    isError: false,
    shouldShowSortMenu: false,
    sortingMethod: 'NAME',
  },
};

describe('Selector :: reposSelectors', () => {
  test('reposStateSelector', () => {
    expect(reposStateSelector(mockState)).toEqual(mockState.repos);
  });

  test('trendingReposSelector', () => {
    expect(trendingReposSelector(mockState)).toEqual(mockTrendingRepos);
  });

  test('repoLastUpdatedSelector', () => {
    const expectedOutput = mockState.repos.lastUpdated;
    expect(repoLastUpdatedSelector(mockState)).toEqual(expectedOutput);
  });

  test('repoIsLoadingSelector', () => {
    const expectedOutput = mockState.repos.isLoading;
    expect(repoIsLoadingSelector(mockState)).toEqual(expectedOutput);
  });

  test('repoIsErrorSelector', () => {
    const expectedOutput = mockState.repos.isError;
    expect(repoIsErrorSelector(mockState)).toEqual(expectedOutput);
  });

  describe('shouldFetchReposSelector', () => {
    it('should return true when lastUpdated is empty', () => {
      const mockStateWithEmptyLastUpdated: app.State = {
        ...mockState,
        repos: {
          ...mockState.repos,
          lastUpdated: '',
        },
      };
      expect(shouldFetchReposSelector(mockStateWithEmptyLastUpdated)).toEqual(
        true,
      );
    });

    it('should return true when lastUpdated is more than 2 hours', () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-03-08'));
      const mockStateWithEmptyLastUpdated: app.State = {
        ...mockState,
        repos: {
          ...mockState.repos,
          lastUpdated: '2023-03-06T05:44:56.381Z',
        },
      };
      expect(shouldFetchReposSelector(mockStateWithEmptyLastUpdated)).toEqual(
        true,
      );
    });

    it('should return false when lastUpdated is less than 2 hours', () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-03-06'));
      const mockStateWithEmptyLastUpdated: app.State = {
        ...mockState,
        repos: {
          ...mockState.repos,
          lastUpdated: '2023-03-06T00:01:00.000Z',
        },
      };
      expect(shouldFetchReposSelector(mockStateWithEmptyLastUpdated)).toEqual(
        false,
      );
    });
  });

  test('shouldShowSortMenuSelector', () => {
    const expectedOutput = mockState.repos.isError;
    expect(shouldShowSortMenuSelector(mockState)).toEqual(expectedOutput);
  });

  test('repoSortingMethodSelector', () => {
    const expectedOutput = mockState.repos.sortingMethod;
    expect(repoSortingMethodSelector(mockState)).toEqual(expectedOutput);
  });

  describe('sortedTrendingReposSelector', () => {
    it('should return repos sorted by name', () => {
      const expectedOutput: app.RepositoryItem[] = [
        mockTrendingRepos[1],
        mockTrendingRepos[0],
      ];
      expect(sortedTrendingReposSelector(mockState)).toEqual(expectedOutput);
    });

    it('should return repos sorted by stars', () => {
      const expectedOutput: app.RepositoryItem[] = [
        mockTrendingRepos[1],
        mockTrendingRepos[0],
      ];
      expect(sortedTrendingReposSelector(mockState)).toEqual(expectedOutput);
    });
  });
});
