import { StyleSheet, Text, View } from 'react-native';
import { FullMovie } from '../../../core/entities';
import { Formatter } from '../../../config/helpers';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({ movie }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{movie.rating}</Text>

          <Text style={{ marginLeft: 5 }}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Story
        </Text>

        <Text style={{ fontSize: 16 }}>{movie.description}</Text>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>

        <Text style={{ fontSize: 18 }}>
          {Formatter.currency(movie.budget)} USD
        </Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}
        >
          Cast
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
