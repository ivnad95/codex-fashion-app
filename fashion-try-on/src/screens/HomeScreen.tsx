
import { View, Text, Button, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { RootTabScreenProps } from '../navigation/types';
import { setCacheItem } from '../utils/storage';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  useEffect(() => {
    setCacheItem('lastVisit', new Date().toISOString()).catch(() => {});
  }, []);


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
    padding: 16,
  },
});
