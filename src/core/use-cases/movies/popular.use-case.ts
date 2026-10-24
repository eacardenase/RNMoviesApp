import { HttpAdapter } from '../../../config/adapters';
import { MovieDBResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import { type Movie } from '../../entities';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);

    throw new Error('Error fetching movies');
  }
};
