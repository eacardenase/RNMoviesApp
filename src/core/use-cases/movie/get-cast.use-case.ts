import { HttpAdapter } from '../../../config/adapters';
import { MovieDBCreditsResponse } from '../../../infrastructure/interfaces';
import { CastMapper } from '../../../infrastructure/mappers';
import { Cast } from '../../entities';

export const getMovieCastByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`,
    );

    return cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);

    throw new Error(`DEBUG: Failed to get movie cast: ${movieId}`);
  }
};
