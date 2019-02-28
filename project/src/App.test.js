import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

it("should renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should box dont render in init", () => {
  const wrapper = shallow(<App />);
  const SelectedCity = wrapper.find("SelectedCity");
  expect(SelectedCity.length).toBe(0);
});

it("Title check", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".app-title").text()).toBe("Previsão do tempo");
});
