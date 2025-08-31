import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'api_key';

export async function saveApiKey(key: string) {
  await SecureStore.setItemAsync(API_KEY, key);
}

export async function getApiKey() {
  return SecureStore.getItemAsync(API_KEY);
}

export async function setCacheItem(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

export async function getCacheItem(key: string) {
  return AsyncStorage.getItem(key);
}

export async function clearStorage() {
  await SecureStore.deleteItemAsync(API_KEY);
  await AsyncStorage.clear();
}
