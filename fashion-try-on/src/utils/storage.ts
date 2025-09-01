import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'api_key';
const LAST_VISIT_KEY = 'lastVisit';

export async function saveApiKey(key: string) {
  try {
    await SecureStore.setItemAsync(API_KEY, key);
  } catch (err) {
    console.error('Failed to save API key', err);
  }
}

export async function getApiKey() {
  return SecureStore.getItemAsync(API_KEY);
}

export async function saveLastVisit(value: string) {
  await AsyncStorage.setItem(LAST_VISIT_KEY, value);
}

export async function getLastVisit() {
  return AsyncStorage.getItem(LAST_VISIT_KEY);
}

export async function clearStorage() {
  await SecureStore.deleteItemAsync(API_KEY);
  await AsyncStorage.removeItem(LAST_VISIT_KEY);
}
