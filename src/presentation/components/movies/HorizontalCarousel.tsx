import { useEffect, useRef } from 'react';
import { FlatList, ScrollEvent, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../core/entities';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {
  const height = title ? 260 : 220;
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: ScrollEvent) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <View style={{ ...styles.container, height }}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        onScroll={onScroll}
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
