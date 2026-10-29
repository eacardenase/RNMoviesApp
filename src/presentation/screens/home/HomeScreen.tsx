import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks';
import {
  FullScreenLoader,
  HorizontalCarousel,
  PosterCarousel,
} from '../../components';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View
        style={{
          ...styles.container,
          marginTop: styles.container.marginTop + top,
        }}
      >
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          movies={popular}
          title="Popular"
          loadNextPage={popularNextPage}
        />

        <HorizontalCarousel movies={topRated} title="Top Rated" />

        <HorizontalCarousel movies={upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 30,
  },
});
