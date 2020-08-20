import React from "react";
import { shalow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe("Pruebas en <GifGridItem", () => {
  test("should show <GifGridItem/> correctly", () => {
    const wrapper = shalow(<GifGridItem />);
  });
});
