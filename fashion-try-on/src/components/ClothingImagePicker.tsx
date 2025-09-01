import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useImageContext } from '../context/ImageContext';

export default function ClothingImagePicker() {
  const { clothingImage, setClothingImage } = useImageContext();

  const pickImage = async (fromCamera: boolean) => {
    const permission = fromCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert('Permission required');
      return;
    }

    const result = fromCamera
      ? await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.5 })
      : await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.5 });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setClothingImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {clothingImage && <Image source={{ uri: clothingImage }} style={styles.image} />}
      <Button
        title={clothingImage ? 'Change Clothing Image' : 'Pick Clothing Image'}
        onPress={() => pickImage(false)}
      />
      <View style={styles.spacer} />
      <Button title="Use Camera" onPress={() => pickImage(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  spacer: {
    height: 10,
  },
});
