import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blocs from './Blocs';

describe('<Blocs />', () => {
  test('it should mount', () => {
    render(<Blocs />);
    
    const blocs = screen.getByTestId('Blocs');

    expect(blocs).toBeInTheDocument();
  });
});