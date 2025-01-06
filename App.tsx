import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator id={undefined}>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
