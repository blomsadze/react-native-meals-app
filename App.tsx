import React, { Suspense } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/Favorites.screen";
import { Provider } from "react-redux";
import { store } from "./store";

export type RootStackParamList = {
  MealDetails: { mealId: string };
  Categories: undefined;
  MealsOverview: undefined;
  Drawer: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      id={undefined}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d7f1d4",
        },
        headerTintColor: "black",
        drawerContentStyle: {
          backgroundColor: "#dddddd",
        },
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <Suspense fallback={<Loader />}>
            <Stack.Navigator
              id={undefined}
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#d7f1d4",
                },
                headerTintColor: "black",
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              />
              <Stack.Screen
                name="MealDetails"
                component={MealDetailsScreen}
                options={{
                  title: "About the Meal",
                }}
              />
            </Stack.Navigator>
          </Suspense>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const Loader = () => <ActivityIndicator size="large" color="#351401" />;
