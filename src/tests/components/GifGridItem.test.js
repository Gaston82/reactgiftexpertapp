import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem", () => {
  const title = "A title";
  const url = "http://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should show <GifGridItem/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should have a paragraph with a title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("image url and title should be equal to the props values", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
});
