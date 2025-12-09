import { scaleFontSize } from "@/utils";
import { StyleSheet, Text } from "react-native";

export const Title = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: scaleFontSize(25),
    marginBottom: 10,
  },
});
