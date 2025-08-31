import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import { RootTabScreenProps } from '../navigation/types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const processImage = async () => {
    try {
      const remote = 'https://placekitten.com/400/400';
      const download = await FileSystem.downloadAsync(
        remote,
        FileSystem.cacheDirectory + 'temp.jpg'
      );
      const manipulated = await ImageManipulator.manipulateAsync(download.uri, [
        { rotate: 90 },
      ]);
      const dir = FileSystem.documentDirectory + 'images';
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
      const newPath = `${dir}/${Date.now()}.jpg`;
      await FileSystem.moveAsync({ from: manipulated.uri, to: newPath });
      Alert.alert('Saved', 'Image stored to gallery');
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Process Image" onPress={processImage} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
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
