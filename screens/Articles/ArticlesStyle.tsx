import { StyleSheet } from 'react-native';

export const articlesStyle = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  detailsView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  articleTitle: {
    fontWeight: '900',
    fontSize: 18,
    marginBottom: 5,
  },
  listContentView: {
    padding: 20,
  },
  articleImage: {
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  articleSource: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
  },
  articleDescription: {
    fontWeight: '500',
    fontSize: 16,
  },
  btnPage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: 20,
  },
});
