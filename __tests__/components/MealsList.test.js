import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";

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
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg",
    ingredients: [
      "8 Veal Cutlets",
      "4 Eggs",
      "200g Bread Crumbs",
      "100g Flour",
      "300ml Butter",
      "100g Vegetable Oil",
      "Salt",
      "Lemon Slices",
    ],
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
    steps: [
      "Tenderize the veal to about 2–4mm, and salt on both sides.",
      "On a flat plate, stir the eggs briefly with a fork.",
      "Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.",
      "Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.",
      "Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.",
      "Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.",
      "Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.",
    ],
    title: "Wiener Schnitzel",
  },
];

describe("Meal List component", () => {
  beforeEach(() => {
    // Alternatively, set "clearMocks" in your Jest config to "true"
    mockedDispatch.mockClear();
  });

  test("render component", () => {
    render(<MealsList items={items} id={items.id} />);
    expect(screen.getByLabelText("meals-list-items")).toBeDefined();
  });

  test("render text content", () => {
    render(<MealsList items={items} id={items.id} />);
    expect(screen.getByLabelText("meals-list-items")).toHaveTextContent(
      "Wiener Schnitzel"
    );
  });

  test("clicking on meal item takes you to the meals details screen", async () => {
    const onPress = jest.fn();

    const component = <MealsList items={items} id={items.id} />;
    render(component);

    const mealClick = await screen.getByLabelText("item-pressed");
    expect(mealClick).toBeOnTheScreen();

    await waitFor(() => {
        expect(screen.getByLabelText("item-pressed")).toBeTruthy();
        expect(screen.getByText("CHALLENGING")).toBeOnTheScreen();
      })
  });
});
