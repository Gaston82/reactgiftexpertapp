import React from "react";
import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Testing AddCatery component", () => {
  const setCategories = () => {};
  test("should show <AddCategory/> correctly", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
