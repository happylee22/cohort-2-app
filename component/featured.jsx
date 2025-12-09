import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "./title";
export const Featured = () => {
  return (
    <View style={styles.container}>
      <Title text="Featured Recipes" />
      <Text>featured</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
