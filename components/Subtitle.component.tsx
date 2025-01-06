import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type TSubtitleProps = {
  children: string;
};

const Subtitle: FC<TSubtitleProps> = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export { Subtitle };

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#f54242",
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    // color: "#f54242",
  },
});
