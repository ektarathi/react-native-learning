import React from "react";
import { render, screen } from "@testing-library/react-native";

import "@testing-library/jest-native/extend-expect";
import List from "../../components/MealInformation/List";

const data = [
  "Cut the tomatoes and the onion into small pieces.",
  "Boil some water - add salt to it once it boils.",
  "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
  "In the meantime, heaten up some olive oil and add the cut onion.",
];

describe("Subtitle component", () => {
  test("render component", () => {
    render(<List data={data} />);
    expect(screen.getAllByLabelText("meal-details-list")).toBeDefined();
  });

  test("render text content", () => {
    render(<List data={data} />);
    expect(screen.getAllByLabelText("meal-details-list").length).toBe(4);
    expect(screen.getAllByLabelText("meal-details-list")[0]).toHaveTextContent("Cut the tomatoes and the onion into small pieces.");
  });
});
