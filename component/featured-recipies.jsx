import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FeaturedRecipe } from "./featuredRecipie";
export const FeaturedRecipies = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <FeaturedRecipe data={item} />}
      keyExtractor={(item) => item.id?.toString() || Math.random().toString()} // safe keyExtractor
      contentContainerStyle={{
        gap: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({});
