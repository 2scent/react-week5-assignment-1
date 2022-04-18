import { render } from '@testing-library/react';

import Locations from './Locations';

test('Locations', () => {
  const locations = [
    {
      id: 1, name: '서울',
    },
  ];

  const { queryByText } = render((
    <Locations locations={locations} />
  ));

  expect(queryByText('서울')).not.toBeNull();
});
