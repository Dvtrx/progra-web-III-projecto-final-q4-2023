import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contac from './Contac';

describe('<Contac />', () => {
  test('it should mount', () => {
    render(<Contac />);
    
    const contac = screen.getByTestId('Contac');

    expect(contac).toBeInTheDocument();
  });
});