import React from 'react';
import renderer from 'react-test-renderer';

import AccordionHeadSkeleton from '../../../src/components/AccordionHeadSkeleton';
import SkeletonLoadingModule from '../../../src/components/SkeletonLoadingModule';

it('should render correctly', () => {
  const component = <AccordionHeadSkeleton />;
  const amount = 10;
  const tree = renderer
    .create(<SkeletonLoadingModule component={component} amount={amount} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
