import { View, Text, StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../navigation/types';

export default function SettingsScreen({ route }: RootTabScreenProps<'Settings'>) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
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
