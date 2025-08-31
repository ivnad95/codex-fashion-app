import { View, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../navigation/types';

export default function DetailsScreen({ route }: RootStackScreenProps<'Details'>) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{route.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
