import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import QuotesItem from './QuotesItem';

describe('Quotes component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <QuotesItem />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});