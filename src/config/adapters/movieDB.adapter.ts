import { AxiosAdapter } from './';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '',
    language: 'en',
  },
});
