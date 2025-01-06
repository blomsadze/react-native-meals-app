import React, { FC, useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/mockup";
import { MealItem } from "../components";

type TMealsOverviewProps = {
  route: {
    params: {
      categoryId: string;
    };
  };
};

const MealsOverview: FC<TMealsOverviewProps> = ({ route }) => {
  const { categoryId } = route.params;

  const mealsList = useMemo(() => {
    return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsList}
        renderItem={({ item }) => <MealItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export { MealsOverview };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
