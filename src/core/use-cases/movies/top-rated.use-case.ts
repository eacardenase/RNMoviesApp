import { HttpAdapter } from '../../../config/adapters';
import { MovieDBResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import { type Movie } from '../../entities';

export const moviesTopRatesUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBResponse>('/top_rated');

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);

    throw new Error('Error fetching movies');
  }
};
