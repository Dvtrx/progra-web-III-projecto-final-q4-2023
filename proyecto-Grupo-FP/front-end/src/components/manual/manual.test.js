import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Manual from './Manual';

describe('<Manual />', () => {
  test('it should mount', () => {
    render(<Manual />);
    
    const manual = screen.getByTestId('Manual');

    expect(manual).toBeInTheDocument();
  });
});