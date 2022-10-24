import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticlesScreen } from './screens/Articles/ArticlesScreen';
import ArticleDetailsScreen from './screens/ArticleDetails/ArticleDetailsScreen';
import { RootStackParamList } from './navigation/types';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { screenDefaultOptions } from './utils/DesignSystem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ConnectionStatusBar } from 'react-native-ui-lib';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ConnectionStatusBar />
      <NavigationContainer>
        <RootStack.Navigator screenOptions={screenDefaultOptions()}>
          <RootStack.Screen name="Headlines" component={ArticlesScreen} />
          <RootStack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
            <RootStack.Screen name="ArticleDetails" component={ArticleDetailsScreen} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  </QueryClientProvider>
);

export default App;
