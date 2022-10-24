import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Article } from '../../types/NewsClient';
import { FlashList } from '@shopify/flash-list';
import { useMemo, useState } from 'react';
import { ListRenderItemInfo } from '@shopify/flash-list/src/FlashListProps';
import { useNavigation } from '@react-navigation/native';
import { usePaginatedHeadlines } from '../../hooks/usePaginatedHeadlines';
import { articlesStyle } from './ArticlesStyle';

export const ArticlesScreen = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data, isFetching } = usePaginatedHeadlines(page);
  const { navigate } = useNavigation();

  const pagerComponent = useMemo(
    () => (
      <View style={articlesStyle.btnPage}>
        <Button
          title={'Prev page'}
          onPress={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        />
        <Text>{page}</Text>
        <Button
          title={'Next page'}
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
    <TouchableOpacity
      key={index}
      style={articlesStyle.detailsView}
      onPress={() => navigate('ArticleDetails', { article: item })}>
      <Image
        testID={'itemImage'}
        source={{ uri: item.urlToImage }}
        style={articlesStyle.articleImage}
      />
      <View style={articlesStyle.listContentView}>
        <Text style={articlesStyle.articleTitle}>{item.title}</Text>
        {item.author && <Text style={articlesStyle.articleSource}>Author(s): {item.author}</Text>}
        <Text style={articlesStyle.articleSource}>
          Published on {new Date(item.publishedAt).toLocaleString()}
        </Text>
        <Text style={articlesStyle.articleDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={articlesStyle.rootView}>
      {isLoading || isFetching ? (
        <ActivityIndicator color={'black'} size={'large'} />
      ) : (
        <FlashList
          contentInsetAdjustmentBehavior={'always'}
          data={data?.articles?.filter((a) => a.source.id)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={pagerComponent}
          renderItem={renderArticle}
          ListEmptyComponent={() => <Text>No data at this moment</Text>}
          ListFooterComponent={pagerComponent}
          estimatedItemSize={data?.totalResults}
        />
      )}
    </SafeAreaView>
  );
};
