import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../core/entities';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalCarousel = ({ movies, title }: Props) => {
  return (
    <View style={{ ...styles.container, height: title ? 260 : 220 }}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 30,
    fontWeight: '300',
    marginLeft: 10,
    marginBottom: 10,
  },
});
