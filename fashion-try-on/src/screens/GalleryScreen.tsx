import React, { useCallback, useState } from 'react';
import { View, Image, Button, FlatList, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { useFocusEffect } from '@react-navigation/native';

export default function GalleryScreen() {
  const [images, setImages] = useState<string[]>([]);

  const loadImages = async () => {
    const dir = FileSystem.documentDirectory + 'images';
    try {
      const files = await FileSystem.readDirectoryAsync(dir);
      setImages(files.map((f) => `${dir}/${f}`));
    } catch {
      setImages([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadImages();
    }, [])
  );

  const shareImage = async (uri: string) => {
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri);
    }
  };

  const saveToCameraRoll = async (uri: string) => {
    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted) {
      await MediaLibrary.saveToLibraryAsync(uri);
    }
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item}
      horizontal
      pagingEnabled
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item }} style={styles.image} />
          <View style={styles.buttons}>
            <Button title="Share" onPress={() => shareImage(item)} />
            <Button title="Save" onPress={() => saveToCameraRoll(item)} />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
