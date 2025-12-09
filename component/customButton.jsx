import { colors } from "@/constant";
import { Pressable, StyleSheet, Text } from "react-native";

export const Button = ({ text, style, onPress }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "semi-bold",
    textAlign: "center",
  },
});
