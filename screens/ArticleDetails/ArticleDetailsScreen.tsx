import { useRoute } from '@react-navigation/native';
import { ArticleDetailsProps } from '../../navigation/types';
import { Button, Card, Text, View } from 'react-native-ui-lib';
import { Dimensions, Linking, ScrollView } from 'react-native';
import { useMemo } from 'react';

const ArticleDetailsScreen = () => {
  const route = useRoute<ArticleDetailsProps>();
  const { urlToImage, url, title, publishedAt, content, description, author } =
    route.params.article;

  const getArticlesCard = useMemo(
    () => (
      <Card>
        <Card.Section
          imageSource={{ uri: urlToImage }}
          imageStyle={{ height: Dimensions.get('screen').height * 0.4 }}
        />
        <View padding-20>
          <Text text50 marginB-10>
            {title}
          </Text>
          {author && <Text text90>Author(s): {author}</Text>}
          <Text text80>Published on {new Date(publishedAt).toLocaleString()}</Text>
          <Text text70>{description}</Text>
          <Text text70 marginT-20>
            {content}
          </Text>
          <Button
            marginT-15
            marginB-15
            label={'View More'}
            onPress={() => Linking.openURL(url)}></Button>
        </View>
      </Card>
    ),
    [urlToImage, url, title, publishedAt, content, description, author]
  );

  return <ScrollView>{getArticlesCard}</ScrollView>;
};
export default ArticleDetailsScreen;
