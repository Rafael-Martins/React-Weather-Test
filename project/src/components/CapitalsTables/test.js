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
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    const wrapper = shallow(<Index cityTemps={[]} />);
    const tablesTable = wrapper.find(".capitals-table__left-table #temp-table");
    const tablesTable2 = wrapper.find(
      ".capitals-table__right-table #temp-table"
    );

    expect(tablesTable.length).toBe(1);
    expect(tablesTable2.length).toBe(1);
  });

  it("should render with tenCityArray", () => {
    const wrapper = shallow(<Index cityTemps={tenCityArray} />);
    const tablesTable = wrapper.find(".capitals-table__left-table #temp-table");
    const tablesTable2 = wrapper.find(
      ".capitals-table__right-table #temp-table"
    );

    expect(tablesTable.length).toBe(1);
    expect(tablesTable2.length).toBe(1);
  });
});
