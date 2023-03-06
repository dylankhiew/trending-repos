import React from "react";
import renderer from "react-test-renderer";

import AccordionHeadSkeleton from "../../../src/components/AccordionHeadSkeleton";

it("should render correctly", () => {
  const tree = renderer.create(<AccordionHeadSkeleton />).toJSON();
  expect(tree).toMatchSnapshot();
});
