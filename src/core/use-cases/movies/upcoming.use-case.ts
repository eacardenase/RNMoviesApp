import { HttpAdapter } from '../../../config/adapters';
import { MovieDBResponse } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import { type Movie } from '../../entities';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBResponse>('/upcoming');

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);

    throw new Error('Error fetching movies');
  }
};
