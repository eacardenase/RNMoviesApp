import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation';
import { useMovie } from '../../hooks';
import { MovieHeader } from '../../components';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <MovieHeader movie={movie!} />
    </View>
  );
};
