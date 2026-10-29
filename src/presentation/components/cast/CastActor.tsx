import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../../../core/entities';

interface Props {
  actor: Cast;
}

export const CastActor = ({ actor }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: actor.avatar,
        }}
        style={styles.avatar}
      />

      <View style={styles.actorInfo}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.subtitle}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 100,
  },
  actorInfo: {
    marginTop: 4,
  },
  avatar: {
    height: 150,
    borderRadius: 10,
  },
  title: { fontSize: 15, fontWeight: 'bold' },
  subtitle: { fontSize: 12, opacity: 0.7 },
});
