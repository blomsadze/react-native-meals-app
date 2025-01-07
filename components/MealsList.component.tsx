import React, { FC } from "react";
import { IMeal } from "../models/meal";
import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "./MealItem.component";

type TMealsListProps = {
  items: IMeal[];
};

const MealsList: FC<TMealsListProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <MealItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export { MealsList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
