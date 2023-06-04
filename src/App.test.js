import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/안녕하세요. 반갑습니다./i);
  expect(linkElement).toBeInTheDocument();
});