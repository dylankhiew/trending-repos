import React from 'react';
import renderer from 'react-test-renderer';

import ErrorModule from '../../../src/components/ErrorModule';

it('should render correctly', () => {
  const title = 'title';
  const subtitle = 'subtitle';
  const buttonTitle = 'buttonTitle';

  const tree = renderer
    .create(
      <ErrorModule
        title={title}
        subtitle={subtitle}
        buttonTitle={buttonTitle}
        imageSource={0}
        onPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
