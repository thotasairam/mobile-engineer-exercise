import { StyleSheet, Text, View } from 'react-native';

export const ArticlesScreen = () => (
  <View style={articlesStyle.rootView}>
    <Text>Articles Screen</Text>
  </View>
);

const articlesStyle = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
