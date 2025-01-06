import React, { FC } from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IMeal } from "../models/meal";
import { MealDetails } from "./MealDetails.component";
import { RootStackParamList } from "../App";

type TMealItemProps = {
  item: IMeal;
};

const MealItem: FC<TMealItemProps> = ({
  item: { id, title, imageUrl, duration, complexity, affordability },
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const pressHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={pressHandler}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}> {title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export { MealItem };

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#f5428d",
  },
  buttonPressed: { opacity: 0.5 },
});
