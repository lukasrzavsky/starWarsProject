import React from "react";
import renderer from "react-test-renderer";
import { ListFooterLoading } from "..";

describe("<ListFooterLoading />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ListFooterLoading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
    const tree = renderer
      .create(<ListFooterLoading />)
      .toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.children.length).toBe(1);
  });
});
