import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Aboutus from './Aboutus';

describe('<Aboutus />', () => {
  test('it should mount', () => {
    render(<Aboutus />);

    const aboutus = screen.getByTestId('Aboutus');

    expect(aboutus).toBeInTheDocument();
  });
});