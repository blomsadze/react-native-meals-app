import React, { FC, useLayoutEffect, useMemo } from "react";
import { MealsList } from "../components";
import { CATEGORIES, MEALS } from "../data/mockup";

type TMealsOverviewProps = {
  route: {
    params: {
      categoryId: string;
    };
  };
  navigation: any;
};

const MealsOverviewScreen: FC<TMealsOverviewProps> = ({
  route,
  navigation,
}) => {
  const { categoryId } = route.params;

  const mealsList = useMemo(() => {
    return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  }, [categoryId]);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (cat) => cat.id === categoryId
    )?.title;
    if (categoryTitle) {
      navigation.setOptions({ title: categoryTitle });
    }
  }, [categoryId]);

  return <MealsList items={mealsList} />;
};

export default MealsOverviewScreen;
