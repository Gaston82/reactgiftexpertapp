import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem", () => {
  const title = "A title";
  const url = "http://localhost/algo.jpg";

  test("should show <GifGridItem/> correctly", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
