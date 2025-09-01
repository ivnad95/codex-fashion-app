import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import { clearStorage } from '../utils/storage';

export default function SettingsScreen() {
  const handleClear = async () => {
    try {
      await clearStorage();
      Alert.alert('Data cleared');
    } catch (err) {
      console.error('Failed to clear storage', err);
      Alert.alert('Failed to clear data');
    }
  };

  const handlePrivacy = async () => {
    const url = 'https://example.com/privacy';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Unable to open privacy policy');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Clear Stored Data" onPress={handleClear} />
      </View>
      <View style={styles.button}>
        <Button title="Privacy Policy" onPress={handlePrivacy} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 6,
  },
});
