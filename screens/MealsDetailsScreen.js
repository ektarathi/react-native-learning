import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useContext, useEffect } from 'react';
import { useRoute, useNavigation } from "@react-navigation/native";

import { MEALS } from "../data/dummyData";

// components
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealInformation/Subtitle";
import List from "../components/MealInformation/List";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favourite-context";

const MealDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const favouriteMeal = useContext(FavouriteContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMeal.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavourite) {
      favouriteMeal.removeFavorite(mealId);
    } else {
      favouriteMeal.addFavorite(mealId);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFavourite ? "star": "star-outline"} color="white" onPress={changeFavoriteStatusHandler} />
      }
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
