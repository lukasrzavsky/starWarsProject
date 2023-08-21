import React from "react";
import renderer from "react-test-renderer";
import { Loading } from "..";

describe("<Loading />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
    const tree = renderer
      .create(<Loading />)
      .toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.children.length).toBe(1);
  });
});
