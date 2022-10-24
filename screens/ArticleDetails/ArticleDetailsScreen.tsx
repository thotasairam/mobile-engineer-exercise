import { useRoute } from '@react-navigation/native';
import { ArticleDetailsProps } from '../../navigation/types';
import { Button, Image, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useMemo } from 'react';
import { articleDetailsStyle } from './ArticleDetailsStyle';

const ArticleDetailsScreen = () => {
  const route = useRoute<ArticleDetailsProps>();
  const { urlToImage, url, title, publishedAt, content, description, author } =
    route.params.article;

  const getArticlesCard = useMemo(
    () => (
      <SafeAreaView>
        <Image
          source={{ uri: urlToImage }}
          testID={'articleImage'}
          style={articleDetailsStyle.articleImage}
        />
        <View style={articleDetailsStyle.detailsView}>
          <Text style={articleDetailsStyle.articleTitle}>{title}</Text>
          {author && <Text style={articleDetailsStyle.articleAuthor}>Author(s): {author}</Text>}
          <Text style={articleDetailsStyle.articlePublishedAt}>
            Published on {new Date(publishedAt).toLocaleString()}
          </Text>
          <Text style={articleDetailsStyle.articleDescription}>{description}</Text>
          <Text style={articleDetailsStyle.articleContent}>{content}</Text>
          <Button title={'View More'} onPress={() => Linking.openURL(url)} />
        </View>
      </SafeAreaView>
    ),
    [urlToImage, url, title, publishedAt, content, description, author]
  );

  return <ScrollView>{getArticlesCard}</ScrollView>;
};
export default ArticleDetailsScreen;
