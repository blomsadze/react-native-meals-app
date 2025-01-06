import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/mockup";
import { CategoryGridTile } from "../components";

type TCategoriesScreenProps = {
  navigation: any;
};

const CategoriesScreen: FC<TCategoriesScreenProps> = ({ navigation }) => {
  const pressHandler = (categoryId: string) => {
    navigation.navigate("MealsOverview", {
      categoryId,
    });
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGridTile item={item} onPress={pressHandler} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
