import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App bootcamps={[]}/>);
  const headerElement = screen.getByText('Add New Developer');
  expect(headerElement).toBeInTheDocument();
});
