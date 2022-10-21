import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { Colors } from 'react-native-ui-lib';

// Default options
export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTintColor: Colors.primary,

  // this setup makes large title work on iOS
  ...Platform.select({
    ios: {
      headerLargeTitle: true,
      headerTransparent: true,
      headerBlurEffect: 'light', // this sets up blurred nav bar
    },
  }),
});
