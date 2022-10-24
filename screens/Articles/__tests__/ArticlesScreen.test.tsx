import { render } from '@testing-library/react-native';
import { ArticlesScreen } from '../ArticlesScreen';
import { ActivityIndicator } from 'react-native';
import { usePaginatedHeadlines } from '../../../hooks/usePaginatedHeadlines';
import { useNavigation } from '@react-navigation/native';
import { MockArticleStub } from '../__stubs__/Article.stub';

jest.mock('@react-navigation/native');
jest.mock('../../../hooks/usePaginatedHeadlines');
const useMockedNavigation = useNavigation as jest.Mock;
const useMockedPaginatedHeadlines = usePaginatedHeadlines as jest.Mock;

describe('Articles Screen with data', () => {
  const renderScreen = () => render(<ArticlesScreen />);

  beforeEach(() => {
    useMockedNavigation.mockImplementation(() => ({ navigate: () => {} }));
    useMockedPaginatedHeadlines.mockImplementation(() => ({
      isLoading: false,
      data: MockArticleStub,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    renderScreen();
    expect(useNavigation).toHaveBeenCalled();
    expect(usePaginatedHeadlines).toHaveBeenCalledWith(1);
  });

  it('should render ActivityIndicator correctly', () => {
    useMockedPaginatedHeadlines.mockImplementation(() => ({ isLoading: true }));
    renderScreen();
    expect(<ActivityIndicator />);
  });

  it('should render image correctly', () => {
    const { getByTestId } = renderScreen();
    expect(getByTestId('itemImage').props.source.uri).toBe(MockArticleStub.articles[0].urlToImage!);
  });

  it('should render title', () => {
    const { getByText } = renderScreen();
    getByText('TestTitle');
  });

  it('should render author', () => {
    const { getByText } = renderScreen();
    getByText('Author(s): ' + MockArticleStub.articles[0].author!);
  });

  it('should render description', () => {
    const { getByText } = renderScreen();
    getByText(MockArticleStub.articles[0].description!);
  });

  it('should render article content', () => {
    const { queryByText } = renderScreen();
    queryByText(MockArticleStub.articles[0].content!);
  });

  it('should render Date', () => {
    const { getByText } = renderScreen();
    getByText('Published on ' + new Date(MockArticleStub.articles[0].publishedAt).toLocaleString());
  });
});
