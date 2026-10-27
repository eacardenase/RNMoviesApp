import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation';
import { useMovie } from '../../hooks';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const {} = useMovie(movieId);

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>{movieId}</Text>
    </View>
  );
};
