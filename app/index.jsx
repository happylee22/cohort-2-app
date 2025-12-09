import { Bottom } from "@/component/bottom";
import { Top } from "@/component/top";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={styles.container}
    >
      <Top />
      <Bottom />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
