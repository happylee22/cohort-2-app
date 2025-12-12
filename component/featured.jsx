import { useFetch } from "@/hooks/useFetch";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { FeaturedRecipes } from "./featured-recipies";
import { Title } from "./title";
export const Featured = () => {
  const { fetching, data } = useFetch({
    link: "recipes/list?from=0&size=20&tags=under_30_minutes",
  });

  if (fetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Title text="Featured Recipes" />
      <FeaturedRecipes data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    gap: 20,
  },
});
