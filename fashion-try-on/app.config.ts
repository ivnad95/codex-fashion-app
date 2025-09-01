import { config } from 'dotenv';
config();

export default {
  expo: {
    name: 'fashion-try-on',
    slug: 'fashion-try-on',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.fashion.tryon',
    },
    android: {
      edgeToEdgeEnabled: true,
      package: 'com.fashion.tryon',
    },
    extra: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      eas: {
        projectId: 'c5090e18-1381-42c9-a058-bbb57a8ab4bd',
      },
    },
  },
};
