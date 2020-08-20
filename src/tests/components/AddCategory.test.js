import React from "react";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Testing AddCatery component", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("should show <AddCategory/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should change inputvalue", () => {
    const input = wrapper.find("input");
    const value = "Hello World";
    input.simulate("change", {
      target: {
        value: value,
      },
    });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
  test("No debe postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("should call setcategories and clean the inputvalue", () => {
    const input = wrapper.find("input");
    const value = "Hello World";
    input.simulate("change", {
      target: {
        value: value,
      },
    });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
