import React from "react";
import { GifExpertApp } from "../GifExpertApp";
import { shallow } from "enzyme";

describe("Testing <GifExpertApp/>", () => {
  test("should show <GifExpertApp/> correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a category list", () => {
    const categories = ["spinetta", "hello"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    //expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
