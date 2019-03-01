import React from "react";
import { shallow } from "enzyme";
import Index from "./index";

const tempArray = [
  {
    max: 27,
    min: 25,
    name: "Rio de Janeiro"
  }
];

const tenCityArray = [
  {
    max: 27,
    min: 25,
    name: "Rio de Janeiro"
  },
  { max: 26, min: 19, name: "Belo Horizonte" },
  { max: 25, min: 18, name: "Brasilia" },
  {
    max: 27,
    min: 25,
    name: "Rio de Janeiro"
  },
  { max: 26, min: 19, name: "Belo Horizonte" },
  { max: 25, min: 18, name: "Brasilia" },
  {
    max: 27,
    min: 25,
    name: "Rio de Janeiro"
  },
  { max: 26, min: 19, name: "Belo Horizonte" },
  { max: 25, min: 18, name: "Brasilia" },
  { max: 25, min: 18, name: "Brasilia" }
];

describe("Basic tests", () => {
  it("should not fail with empty array", () => {
    const wrapper = shallow(<Index temps={[]} range={[0, 1]} />);
    const tablesTable = wrapper.find("#table-item");

    expect(tablesTable.length).toBe(0);
  });

  it("should render 1 with 1 item array", () => {
    const wrapper = shallow(<Index temps={tempArray} range={[0, 1]} />);
    const tablesTable = wrapper.find("#table-item");

    expect(tablesTable.length).toBe(1);
  });

  it("should render 5 with 10 item array and 5 range", () => {
    const wrapper = shallow(<Index temps={tenCityArray} range={[0, 4]} />);
    const tablesTable = wrapper.find("#table-item");

    expect(tablesTable.length).toBe(5);
  });

  it("should render 10 with 10 item array and 10 range", () => {
    const wrapper = shallow(<Index temps={tenCityArray} range={[0, 10]} />);
    const tablesTable = wrapper.find("#table-item");

    expect(tablesTable.length).toBe(10);
  });
});
