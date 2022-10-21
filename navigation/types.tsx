import { RouteProp } from '@react-navigation/native';
import { Article } from '../types/NewsClient';

export type RootStackParamList = {
  Headlines: undefined;
  ArticleDetails: { article: Article };
};

export type ArticleDetailsProps = RouteProp<RootStackParamList, 'ArticleDetails'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
