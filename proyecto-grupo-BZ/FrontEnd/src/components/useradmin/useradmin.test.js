import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Useradmin from './Useradmin';

describe('<Useradmin />', () => {
  test('it should mount', () => {
    render(<Useradmin />);
    
    const useradmin = screen.getByTestId('Useradmin');

    expect(useradmin).toBeInTheDocument();
  });
});