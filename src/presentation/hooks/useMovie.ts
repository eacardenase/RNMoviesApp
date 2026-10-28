import { useCallback, useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { FullMovie } from '../../core/entities';
import { movieDBFetcher } from '../../config/adapters';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  const loadMovie = useCallback(async () => {
    const fullMovie = await UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );

    setMovie(fullMovie);
    setIsLoading(false);
  }, [movieId]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  return {
    movie,
    isLoading,
  };
};
