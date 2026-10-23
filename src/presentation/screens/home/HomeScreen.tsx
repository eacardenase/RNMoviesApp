import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks';
import { PosterCarousel } from '../../components';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return <Text>Loading...</Text>;
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
