import React from "react";
import { render, screen } from "@testing-library/react-native";

import "@testing-library/jest-native/extend-expect";
import MealsList from "../../components/MealsList/MealsList";

const mockedDispatch = jest.fn();

// Mocks like this need to be configured at the top level
// of the test file, they can't be setup inside your tests.
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

const items = [
  {
    affordability: "luxurious",
    categoryIds: ["c4"],
    complexity: "challenging",
    duration: 60,
    id: "m4",
    title: "Wiener Schnitzel",
  },
];

describe("Meal List component", () => {
  beforeEach(() => {
    // Alternatively, set "clearMocks" in your Jest config to "true"
    mockedDispatch.mockClear();
  });
  test("render component", () => {
    render(<MealsList items={items} id={items.id}/>);
    expect(screen.getByLabelText("meals-list-items")).toBeDefined();
  });

  test("render text content", () => {
    render(<MealsList items={items} id={items.id}/>);
    expect(screen.getByLabelText("meals-list-items")).toHaveTextContent(
      "Wiener Schnitzel"
    );
  });
});
