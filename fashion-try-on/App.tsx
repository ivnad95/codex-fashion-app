import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { GOOGLE_API_KEY } from '@env';

export default function App() {
  const apiKeyFromConstants = Constants.expoConfig?.extra?.GOOGLE_API_KEY;
  return (
    <View style={styles.container}>
      <Text>Key via Constants: {apiKeyFromConstants}</Text>
      <Text>Key via @env: {GOOGLE_API_KEY}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
