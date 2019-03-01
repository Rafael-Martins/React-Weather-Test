import React from "react";
import { shallow } from "enzyme";
import Index from "./index";

const city = {
  location: {
    city: "Fresh Creek",
    region: "Central Andros",
    country: "The Bahamas"
  },
  current_observation: {
    wind: {
      chill: 22,
      direction: 200,
      speed: 12
    },
    atmosphere: {
      humidity: 91
    },
    condition: {
      text: "Mostly Clear",
      temperature: 22
    }
  },
  forecasts: [
    {
      day: "Thu",
      low: 22,
      high: 27
    }
  ]
};

describe("Basic tests", () => {
  it("should call close function on press", () => {
    const addMock = jest.fn(() => {});
    const wrapper = shallow(<Index close={addMock} city={city} />);
    const closeIcon = wrapper.find(".close-button");

    closeIcon.simulate("click");

    expect(addMock.mock.calls.length).toBe(1);
  });
});
