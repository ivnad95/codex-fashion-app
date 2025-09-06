import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders home screen', () => {
  const { getAllByText } = render(<App />);
  expect(getAllByText('Home').length).toBeGreaterThan(0);
});
