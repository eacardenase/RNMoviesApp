import { ScrollView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation';
import { useMovie } from '../../hooks';
import { MovieDetails, MovieHeader } from '../../components';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie } = useMovie(movieId);

  if (isLoading || !movie) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MovieHeader
        poster={movie.poster}
        title={movie.title}
        subtitle={movie.originalTitle}
      />

      <MovieDetails movie={movie} />
    </ScrollView>
  );
};
