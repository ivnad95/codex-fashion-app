import { View, Button, StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../navigation/types';
import ModelImagePicker from '../components/ModelImagePicker';
import ClothingImagePicker from '../components/ClothingImagePicker';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <ModelImagePicker />
      <ClothingImagePicker />
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
