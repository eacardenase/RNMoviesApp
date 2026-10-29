import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Cast, FullMovie } from '../../../core/entities';
import { Formatter } from '../../../config/helpers';
import { CastActor } from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.genre}>
          <Text style={styles.textBody}>{movie.rating}</Text>

          <Text>•</Text>

          <Text style={styles.textBody}>{movie.genres.join(', ')}</Text>
        </View>

        <Text style={styles.textTitle}>Story</Text>

        <Text style={styles.textBody}>{movie.description}</Text>

        <Text style={styles.textTitle}>Budget</Text>

        <Text style={styles.textBody}>
          {Formatter.currency(movie.budget)} USD
        </Text>
      </View>

      <View style={[styles.container, styles.castContainer]}>
        <Text style={styles.textTitle}>Cast</Text>

        <FlatList
          data={cast}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  genre: { flexDirection: 'row', gap: 5 },
  textTitle: { fontSize: 23, marginTop: 10, fontWeight: 'bold' },
  textBody: {
    fontSize: 16,
  },
  castContainer: {
    marginBottom: 50,
  },
});
