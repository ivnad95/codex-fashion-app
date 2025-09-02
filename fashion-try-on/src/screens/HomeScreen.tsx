
import { View, Text, Button, StyleSheet } from 'react-native';

import { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../navigation/types';
import { saveLastVisit, getLastVisit } from '../utils/storage';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [lastVisit, setLastVisit] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date().toISOString();
    saveLastVisit(now).catch((err) => {
      console.error('Failed to cache last visit', err);
    });
    getLastVisit()
      .then(setLastVisit)
      .catch((err) => {
        console.error('Failed to load last visit', err);
      });
  }, []);


  return (
    <View style={styles.container}>

      <Text>Home Screen</Text>

      {lastVisit && (
        <Text style={styles.visit}>Last visit: {new Date(lastVisit).toLocaleString()}</Text>
      )}

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
  visit: {
    marginVertical: 8,
  },
});
