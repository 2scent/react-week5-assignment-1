import React from 'react';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  it('renders regions', () => {
    const { queryByText } = render(<RegionsContainer />);
    expect(queryByText('서울')).not.toBeNull();
  });
});
