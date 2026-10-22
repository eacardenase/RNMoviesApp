import { HttpAdapter } from '../../../config/adapters';
import { MovieDBResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import { type Movie } from '../../entities';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBResponse>('/popular');

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);

    throw new Error('Error fetching movies');
  }
};
