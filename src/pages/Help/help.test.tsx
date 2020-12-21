import React from 'react';
import { render, screen } from '@testing-library/react';
import Help from './help';

test('renders learn react link', () => {
  render(<Help />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
