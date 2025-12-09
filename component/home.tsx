import React from "react";
import { StyleSheet, View } from "react-native";
import { Featured } from "./featured";
import { SearchInput } from "./search-input";
export const Home = () => {
  return (
    <View style={styles.container}>
      <SearchInput navigate />
      <Featured />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
