import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { waitFor, fireEvent, render } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Calculator />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('User interaction button clicks in Calculator component', () => {
  it('should perform addition when + button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    waitFor(() => expect(getByText('8')).toBeInTheDocument());
  });
  it('should perform subtraction when - button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    waitFor(() => expect(getByText('5')).toBeInTheDocument());
  });
  it('should perform multiplication when x button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('='));
    waitFor(() => expect(getByText('42')).toBeInTheDocument());
  });
  it('should perform division when ÷ button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    waitFor(() => expect(getByText('2')).toBeInTheDocument());
  });
  it('should perform module when % button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('%'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    waitFor(() => expect(getByText('2')).toBeInTheDocument());
  });
  it('should display 4 when 4 button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('4'));
    waitFor(() => expect(getByText('4')).toBeInTheDocument());
  });
  it('should display 2. when . button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    waitFor(() => expect(getByText('2.')).toBeInTheDocument());
  });
  it('should perform negation when +/- button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('+/-'));
    waitFor(() => expect(getByText('-7')).toBeInTheDocument());
  });
  it('should perform restart when AC button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('AC'));
    waitFor(() => expect(getByText('0')).toBeInTheDocument());
  });
});
