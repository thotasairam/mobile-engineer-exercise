import { useQuery } from 'react-query';
import { NewsClientResponse } from '../types/NewsClient';
import NewsService from '../services/NewsService';

export const usePaginatedHeadlines = (page: number) => {
  return useQuery<NewsClientResponse, Error>(
    ['top-headlines', page],
    () => NewsService.getHeadlines(page),
    {
      keepPreviousData: true,
    }
  );
};
