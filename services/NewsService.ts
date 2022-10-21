import axios from 'axios';
import { NewsClientResponse } from '../types/NewsClient';

const newsClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Content-type': 'application/json',
    Authorization: '03c83906fee24e5bbcce6d4e1d22dff4',
  },
});

export const getHeadlines = async (page: number = 1): Promise<NewsClientResponse> => {
  const response = await newsClient.get<NewsClientResponse>(
    `/top-headlines?country=us&page=${page}`
  );
  return response.data;
};

const NewsService = { getHeadlines };

export default NewsService;
