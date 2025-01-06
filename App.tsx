import React, { Suspense } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";

export type RootStackParamList = {
  MealDetails: { mealId: string };
  MealsCategories: undefined;
  MealsOverview: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const CategoriesScreen = React.lazy(
  () => import("./screens/Categories.screen")
);
const MealsOverviewScreen = React.lazy(
  () => import("./screens/MealsOverview.screen")
);
const MealDetailsScreen = React.lazy(
  () => import("./screens/MealDetails.screen")
);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#d7f1d4",
  },
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer theme={MyTheme}>
        <Suspense fallback={<Loader />}>
          <Stack.Navigator
            id={undefined}
            screenOptions={{
              // cardStyle: { backgroundColor: "transparent" }, // Transparent to let gradient show
              headerStyle: {
                backgroundColor: "#f2e2a0",
              },
              headerTintColor: "black",
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </Suspense>
      </NavigationContainer>
    </>
  );
}

const Loader = () => <ActivityIndicator size="large" color="#351401" />;
