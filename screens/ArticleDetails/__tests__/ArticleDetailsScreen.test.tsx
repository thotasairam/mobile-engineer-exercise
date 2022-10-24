import { render } from '@testing-library/react-native';
import ArticleDetailsScreen from '../ArticleDetailsScreen';
import { useRoute } from '@react-navigation/native';
import { MockArticleStub } from '../../Articles/__stubs__/Article.stub';

const mockedUseRoute = useRoute as jest.Mock;
jest.mock('@react-navigation/native');

describe('Article Details Screen', function () {
  const renderScreen = () => render(<ArticleDetailsScreen />);

  it('should render correctly', function () {
    mockedUseRoute.mockImplementation(() => ({
      params: { article: MockArticleStub.articles[0] },
    }));
    renderScreen();
  });

  it('should render image correctly', () => {
    const { getByTestId } = renderScreen();
    expect(getByTestId('articleImage').props.source.uri).toBe(
      MockArticleStub.articles[0].urlToImage!
    );
  });

  it('should render title correctly', () => {
    const { getByText } = renderScreen();
    getByText('TestTitle');
  });

  it('should render author correctly', () => {
    const { getByText } = renderScreen();
    getByText('Author(s): ' + MockArticleStub.articles[0].author!);
  });

  it('should render description correctly', () => {
    const { getByText } = renderScreen();
    getByText(MockArticleStub.articles[0].description!);
  });

  it('should not render article content', () => {
    const { queryByText } = renderScreen();
    queryByText(MockArticleStub.articles[0].content!);
  });

  it('should render Date correctly', () => {
    const { getByText } = renderScreen();
    getByText('Published on ' + new Date(MockArticleStub.articles[0].publishedAt).toLocaleString());
  });
});
