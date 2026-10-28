import { useCallback, useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { Cast, FullMovie } from '../../core/entities';
import { movieDBFetcher } from '../../config/adapters';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);

  const loadMovie = useCallback(async () => {
    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    const castPromise = UseCases.getMovieCastByIdUseCase(
      movieDBFetcher,
      movieId,
    );

    const [fullMovie, fullCast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    console.log({ fullCast });

    setMovie(fullMovie);
    setCast(fullCast);

    setIsLoading(false);
  }, [movieId]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  return {
    isLoading,
    movie,
    cast,
  };
};
