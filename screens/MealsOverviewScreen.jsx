import { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummyData";

//component
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  let catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <MealsList items = {displayMeals}/>
  )
};

export default MealsOverviewScreen;