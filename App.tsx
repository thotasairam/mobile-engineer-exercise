import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticlesScreen } from './screens/Articles/ArticlesScreen';
import ArticleDetailsScreen from './screens/ArticleDetails/ArticleDetailsScreen';
import { RootStackParamList } from './navigation/types';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootStack.Navigator>
          <RootStack.Screen name="Articles" component={ArticlesScreen} />
          <RootStack.Screen name="ArticleDetails" component={ArticleDetailsScreen} />
        </RootStack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  </>
);

export default App;
