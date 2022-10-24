import { NewsClientResponse } from '../../../types/NewsClient';

export const MockArticleStub: NewsClientResponse = {
  status: 'success',
  totalResults: 10,
  articles: [
    {
      source: {
        name: 'TestSource',
      },
      author: 'TestAuthor',
      title: 'TestTitle',
      description: 'TestDescription',
      url: 'TestUrl',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/107118170-1663136932322-gettyimages-1243199347-AA_13092022_864556.jpeg?v=1666331026&w=1920&h=1080',
      publishedAt: '2022-10-21T08:00:00Z',
      content: 'TestContent',
    },
  ],
};
