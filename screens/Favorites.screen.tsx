import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { MEALS } from "../data/mockup";
import { MealsList } from "../components";
import { IMeal } from "../models/meal";

const FavoritesScreen = () => {
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );

  const favoriteMeals = useMemo<IMeal[]>(() => {
    return favoriteMealIds.map((id) => {
      return MEALS.find((meal) => meal.id === id);
    });
  }, [favoriteMealIds]);

  if (!favoriteMeals.length) {
    return (
      <View>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  text: {
    margin: 32,
    textAlign: "center",
    fontSize: 16,
  },
});
