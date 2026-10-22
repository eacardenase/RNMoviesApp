import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const upcoming = await UseCases.moviesUpcomingUseCase(movieDBFetcher);

    console.log({ upcoming });
  };

  return {
    isLoading,
    nowPlaying,
  };
};
