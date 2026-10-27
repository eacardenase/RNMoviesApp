import { HttpAdapter } from '../../../config/adapters';
import { MovieDBMovie } from '../../../infrastructure/interfaces';
import { MovieMapper } from '../../../infrastructure/mappers';
import { FullMovie } from '../../entities';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movieResponse = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    return MovieMapper.fromMovieDBToEntity(movieResponse);
  } catch (error) {
    console.log(error);

    throw new Error(`Error fetching movie with id ${movieId}`);
  }
};
