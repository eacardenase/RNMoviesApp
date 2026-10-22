import { AxiosAdapter } from './';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'd588a7497425ca1584d1fabb41cdf308',
    language: 'en',
  },
});
