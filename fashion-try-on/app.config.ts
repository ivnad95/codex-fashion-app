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
    },
    android: {
      edgeToEdgeEnabled: true,
    },
    extra: {
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    },
  },
};
