// components/ToggleText.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToggleText from './ToggleText';

describe('ToggleText component', () => {
  test('text is not visible initially', () => {
    const { queryByTestId } = render(<ToggleText />);
    const textElement = queryByTestId('text');
    expect(textElement).toBeNull();
  });

  test('clicking the button makes the text visible', () => {
    const { getByText, getByTestId } = render(<ToggleText />);
    const button = getByText('Toggle Text');
    fireEvent.click(button);
    const textElement = getByTestId('text');
    expect(textElement).toBeInTheDocument();
  });
});
