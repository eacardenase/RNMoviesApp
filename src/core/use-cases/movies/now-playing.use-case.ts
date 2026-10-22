import { HttpAdapter } from '../../../config/adapters';
import { NowPlayingResponse } from '../../../infrastructure/interfaces';
import { type Movie } from '../../entities';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    console.log(nowPlaying);

    return nowPlaying.results;
  } catch (error) {
    console.log(error);

    throw new Error('Error fetching movies');
  }
};
