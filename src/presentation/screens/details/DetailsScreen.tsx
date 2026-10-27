import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;

  console.log({ movieId });

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>{movieId}</Text>
    </View>
  );
};
