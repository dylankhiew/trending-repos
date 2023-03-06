import React from "react";
import renderer from "react-test-renderer";

import RefreshIcon from "../../../src/components/RefreshIcon";

it("should render correctly", () => {
  const tree = renderer.create(<RefreshIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
