import React from "react";
import { shallow } from "enzyme";
import Index from "./index";

describe("Basic tests", () => {
  it("should not fail with null entry", () => {
    const addMock = jest.fn(() => {});
    const wrapper = shallow(<Index goSearch={addMock} />);
    const searchInput = wrapper.find(".search-input");

    searchInput.simulate("keyPress", { charCode: 13 });

    expect(addMock.mock.calls.length).toBe(0);
  });

  it("should call search with correct params", () => {
    const addMock = jest.fn(() => {});
    const wrapper = shallow(<Index goSearch={addMock} />);
    const searchInput = wrapper.find(".search-input");

    searchInput.simulate("change", {
      target: { value: "test" }
    });
    searchInput.simulate("keyPress", { charCode: 13 });

    expect(addMock.mock.calls.length).toBe(1);
    expect(addMock).toBeCalledWith("test");
  });

  it("should search button click work", () => {
    const addMock = jest.fn(() => {});
    const wrapper = shallow(<Index goSearch={addMock} />);
    const searchInput = wrapper.find(".search-input");
    const searchButton = wrapper.find(".search-icon-container");

    searchInput.simulate("change", {
      target: { value: "test" }
    });
    searchButton.simulate("click");

    expect(addMock.mock.calls.length).toBe(1);
  });
});
