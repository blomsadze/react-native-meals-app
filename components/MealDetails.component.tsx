import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type TMealDetailsProps = {
  duration: number;
  complexity: string;
  affordability: string;
};

const MealDetails: FC<TMealDetailsProps> = ({
  duration,
  complexity,
  affordability,
}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}> {duration}</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export { MealDetails };

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
