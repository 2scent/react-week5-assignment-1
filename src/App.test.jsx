import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders categories', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
