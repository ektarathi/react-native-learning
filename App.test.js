import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import AppNavigator from "./App";
import "@testing-library/jest-native/extend-expect";

describe("Testing react navigation", () => {
  test("page contains the categories list", async () => {
    const component = <AppNavigator />;

    render(component);

    const category_screen = await screen.getByLabelText("categories-screen");

    expect(category_screen).toBeOnTheScreen();
  });

  test("clicking on a category takes you to the meals list screen", async () => {
    const component = <AppNavigator />;

    render(component);
    const toClick = await screen.findByText("Italian");

    fireEvent(toClick, "press");
    const meals_list = await screen.getByLabelText("meals-list-items");

    expect(meals_list).toBeOnTheScreen();
  });

  test("clicking on meal item takes you to the meals details screen", async () => {
    const component = <AppNavigator />;

    render(component);
    const toClickCategory = await screen.findByText("German");

    fireEvent(toClickCategory, "press");
    const meals_list = await screen.getByLabelText("meals-list-items");

    expect(meals_list).toBeOnTheScreen();
    const toClickMeal = await screen.findByText("Wiener Schnitzel");

    fireEvent(toClickMeal, "press");
    const meals_details = await screen.findByText(
      "On a flat plate, stir the eggs briefly with a fork."
    );
    expect(meals_details).toBeOnTheScreen();
  });
});
