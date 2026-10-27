import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { FullMovie } from '../../core/entities';
import { movieDBFetcher } from '../../config/adapters';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    const fullMovie = await UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );

    console.log({ movieResponse: fullMovie });

    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    movie,
    isLoading,
  };
};
