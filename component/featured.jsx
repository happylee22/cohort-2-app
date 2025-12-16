import { useFetch } from "@/hooks/useFetch";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { FeaturedRecipes } from "./featured-recipies";
import { FeaturedRecipeLoader } from "./featuredRecipeLoader";
import { Title } from "./title";
const { width } = Dimensions.get("window");
export const Featured = () => {
  const { fetching, data } = useFetch({
    link: "recipes/list?from=0&size=5&tags=under_30_minutes",
  });

  return (
    <View style={styles.container}>
      <Title text="Featured Recipes" />
      <FeaturedRecipeLoader loading={fetching} height={150}>
        <FeaturedRecipes data={data} />
      </FeaturedRecipeLoader>
    </View>
  );
};
const boxWidth = (width - 40) * 0.8;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    gap: 20,
  },
  skeleton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    height: 300,

    // width: boxWidth,
    flex: 1,
  },
});
