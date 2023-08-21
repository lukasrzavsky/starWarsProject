import React from "react";
import renderer from "react-test-renderer";
import { ListItem } from "..";

describe("<ListItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ListItem name="Name" detail="Detail" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 2 children", () => {
    const tree = renderer
      .create(<ListItem name="Name" detail="Detail" />)
      .toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.children.length).toBe(2);
  });
});
