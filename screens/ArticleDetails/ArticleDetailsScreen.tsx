import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ArticleDetailsProps } from '../../navigation/types';

const ArticleDetailsScreen = () => {
  const route = useRoute<ArticleDetailsProps>();
  return <Text>{route.params.articleId}</Text>;
};
export default ArticleDetailsScreen;
