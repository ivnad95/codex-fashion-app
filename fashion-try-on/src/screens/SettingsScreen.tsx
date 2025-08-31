import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import { clearStorage } from '../utils/storage';

export default function SettingsScreen() {
  const handleClear = async () => {
    await clearStorage();
    Alert.alert('Data cleared');
  };

  const handlePrivacy = () => {
    Linking.openURL('https://example.com/privacy');
  };

  return (
    <View style={styles.container}>
      <Button title="Clear Stored Data" onPress={handleClear} />
      <Button title="Privacy Policy" onPress={handlePrivacy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
});
