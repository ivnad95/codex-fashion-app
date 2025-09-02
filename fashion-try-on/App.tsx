import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ReactNode } from 'react';


import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import { RootStackParamList, RootTabParamList } from './src/navigation/types';
import { saveApiKey } from './src/utils/storage';

import { saveApiKey } from './src/utils/storage';


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function ImageProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    const key = Constants.expoConfig?.extra?.GOOGLE_API_KEY;
    if (key) {

      // store without logging
      saveApiKey(key).catch(() => {});

    }
  }, []);

  return (
    <ImageProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
}
