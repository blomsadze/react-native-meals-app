import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/mockup";
import { CategoryGridTile } from "../components";

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGridTile title={item.title} color={item.color} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export { CategoriesScreen };
