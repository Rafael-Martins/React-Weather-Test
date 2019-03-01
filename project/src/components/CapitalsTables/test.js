import React from "react";
import { shallow } from "enzyme";
import Index from "./index";

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
  it("should render with empty array", () => {
    const wrapper = shallow(<Index cityTemps={[]} />);
    const tableLeft = wrapper.find(".capitals-table__left-table #temp-table");
    const tableRight = wrapper.find(".capitals-table__right-table #temp-table");

    expect(tableLeft.length).toBe(1);
    expect(tableRight.length).toBe(1);
  });

  it("should render with tenCityArray", () => {
    const wrapper = shallow(<Index cityTemps={tenCityArray} />);
    const tableLeft = wrapper.find(".capitals-table__left-table #temp-table");
    const tableRight = wrapper.find(".capitals-table__right-table #temp-table");

    expect(tableLeft.length).toBe(1);
    expect(tableRight.length).toBe(1);
  });
});
