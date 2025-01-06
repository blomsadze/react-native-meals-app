import React, { FC, useLayoutEffect, useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { List, MealDetails, Subtitle } from "../components";
import { IMeal } from "../models/meal";
import { MEALS } from "../data/mockup";

type TMealDetailsScreenProps = {
  route: {
    params: {
      mealId: string;
    };
  };
  navigation: any;
};

const MealDetailsScreen: FC<TMealDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { mealId } = route.params;

  const currentMeal = useMemo<IMeal>(() => {
    return MEALS.find((meal) => meal.id === mealId);
  }, [mealId]);

  useLayoutEffect(() => {
    if (currentMeal?.title) {
      navigation.setOptions({ title: currentMeal.title });
    }
  }, [mealId]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: currentMeal?.imageUrl }} />
      <Text style={styles.title}>{currentMeal?.title}</Text>
      <MealDetails
        duration={currentMeal?.duration}
        complexity={currentMeal?.complexity}
        affordability={currentMeal?.affordability}
      />
      <View style={styles.listOutContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={currentMeal?.ingredients || []} />
          <Subtitle>Steps</Subtitle>
          <List data={currentMeal?.steps || []} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#f5428d",
  },
  listOutContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
