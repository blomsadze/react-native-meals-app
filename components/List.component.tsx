import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type TListProps = {
  data: string[];
};

const List: FC<TListProps> = ({ data }) => {
  return data?.map((item, index) => (
    <View key={`${index}-${item}`} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

export { List };

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  itemText: {
    textAlign: "center",
  },
});
