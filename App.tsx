import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticlesScreen } from './screens/Articles/ArticlesScreen';
import ArticleDetailsScreen from './screens/ArticleDetails/ArticleDetailsScreen';
import { RootStackParamList } from './navigation/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Articles" component={ArticlesScreen} />
      <RootStack.Screen name="ArticleDetails" component={ArticleDetailsScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
