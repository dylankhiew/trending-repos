import React from 'react';
import renderer from 'react-test-renderer';

import HeaderButton from '../../../src/components/HeaderButton';

it('should render correctly', () => {
  const tree = renderer.create(<HeaderButton imageSource={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});
