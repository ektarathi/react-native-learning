import React from "react";
import {render, screen} from '@testing-library/react-native';

import '@testing-library/jest-native/extend-expect';
import Subtitle from "../../components/MealInformation/Subtitle";

describe("Subtitle component", () => {
  test("render component", () => {
    render(<Subtitle children={"title-name"} />);
    expect(screen.getByLabelText("subtitle-text")).toBeDefined();
  });

  test("render text content", () => {
    render(<Subtitle children={"title-name"} />);
    expect(screen.getByLabelText("subtitle-text")).toHaveTextContent("title-name");
  });
});
