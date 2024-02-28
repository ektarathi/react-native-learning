import React from "react";
import { render, screen } from "@testing-library/react-native";

import "@testing-library/jest-native/extend-expect";
import MealDetails from "../../components/MealDetails";

describe("MealDetails component", () => {
  test("render component", () => {
    render(
      <MealDetails
        duration={20}
        complexity={"simple"}
        affordability={"affordable"}
        textStyle={""}
      />
    );
    expect(screen.getByLabelText("meal-information")).toBeDefined();
  });

  test("render text content", () => {
    render(
      <MealDetails
        duration={20}
        complexity={"simple"}
        affordability={"affordable"}
        textStyle={""}
      />
    );
    expect(screen.getByLabelText("meal-information")).toHaveTextContent(
      "SIMPLE"
    );
    expect(screen.getByLabelText("meal-information")).toHaveTextContent(
        "AFFORDABLE"
      );
    expect(screen.getByLabelText("meal-information")).toHaveTextContent(
        "20m"
      );
  });
});
