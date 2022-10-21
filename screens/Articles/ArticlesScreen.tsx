import { ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { Article, NewsClientResponse } from '../../types/NewsClient';
import NewsService from '../../services/NewsService';
import { FlashList } from '@shopify/flash-list';
import { useMemo, useState } from 'react';
import { Button, Card, Text, View } from 'react-native-ui-lib';
import { ListRenderItemInfo } from '@shopify/flash-list/src/FlashListProps';
import { useNavigation } from '@react-navigation/native';

export const ArticlesScreen = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery<NewsClientResponse, Error>(['top-headlines', page], () =>
    NewsService.getHeadlines(page)
  );
  const { navigate } = useNavigation();

  const pagerComponent = useMemo(
    () => (
      <View row flex spread centerV margin-20>
        <Button
          label={'Prev page'}
          onPress={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        />
        <Text>{page}</Text>
        <Button
          label={'Next page'}
          onPress={() => {
            setPage(page + 1);
          }}
          disabled={page === Math.ceil((data?.totalResults ?? 0) / 20)}
        />
      </View>
    ),
    [page, data?.totalResults]
  );

  const renderArticle = ({ item, index }: ListRenderItemInfo<Article>) => (
    <Card key={index} margin-20 onPress={() => navigate('ArticleDetails', { article: item })}>
      <Card.Section imageSource={{ uri: item.urlToImage }} imageStyle={{ height: 150 }} />
      <View padding-20>
        <Text text50 marginB-10>
          {item.title}
        </Text>
        {item.author && <Text text90>Author(s): {item.author}</Text>}
        <Text text80>Published on {new Date(item.publishedAt).toLocaleString()}</Text>
        <Text text70>{item.description}</Text>
      </View>
    </Card>
  );

  return (
    <View style={articlesStyle.rootView}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlashList
          contentInsetAdjustmentBehavior={'always'}
          data={data?.articles}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={pagerComponent}
          renderItem={renderArticle}
          ListEmptyComponent={() => <Text>No data at this moment</Text>}
          ListFooterComponent={pagerComponent}
          estimatedItemSize={data?.totalResults}
        />
      )}
    </View>
  );
};

const articlesStyle = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
