import { colors } from "@/constant";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Top = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/chef.png")} style={styles.img} />
      <Text style={styles.text}>100K+ Premium Recipe </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  img: {
    width: 80,
    height: 80,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
