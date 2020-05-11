import React from 'react';
import { render } from '../../../Store/Test/test-utils';
import Icons from '../Icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

test('<Icons />', () => {
  const { getByTestId, container } = render(
    <Icons title="Wind Speed" value={2.56} icon={faWind} />
  );

  const title = getByTestId('icon-title');
  const value = getByTestId('icon-value');

  expect(container.querySelector('svg')).toHaveClass(
    'svg-inline--fa fa-wind fa-w-16 fa-4x '
  );
  expect(title).toHaveTextContent('Wind Speed');
  expect(value).toHaveTextContent('2.56');
});
