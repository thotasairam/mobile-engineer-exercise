import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Articles: undefined;
  ArticleDetails: { articleId: number };
};

export type ArticleDetailsProps = RouteProp<RootStackParamList, 'ArticleDetails'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
