import { Dimensions, StyleSheet } from 'react-native';

export const articleDetailsStyle = StyleSheet.create({
  detailsView: {
    padding: 16,
  },
  articleTitle: {
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 24,
  },
  articleImage: {
    height: Dimensions.get('screen').height * 0.4,
  },
  articleAuthor: {
    fontWeight: '800',
    marginBottom: 5,
    fontSize: 16,
  },
  articlePublishedAt: {
    fontWeight: '700',
    marginBottom: 5,
    fontSize: 16,
  },
  articleDescription: {
    fontWeight: '500',
    fontSize: 16,
  },
  articleContent: {
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});
