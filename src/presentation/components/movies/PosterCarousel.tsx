import { StyleSheet, View } from 'react-native';
import { Movie } from '../../../core/entities';
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({ movies, height = 440 }: Props) => {
  return (
    <View style={{ ...styles.container, height: height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
