import { colors } from "@/constant";
import { StyleSheet, Text, View } from "react-native";
import { changeFirstLatterToUpperCase, scaleFontSize } from "../utils";
export function Nutrition({ nutritionArray }) {
  return (
    <View style={{ gap: 10 }}>
      {nutritionArray.map((item) => (
        <View key={item.label} style={styles.nutritionContainer}>
          <Text style={styles.label}>
            {changeFirstLatterToUpperCase(item?.label)}
          </Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nutritionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.darkGrey,
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontSize: scaleFontSize(17),
    color: colors.black,
  },
  value: {
    fontSize: scaleFontSize(16),
    fontWeight: "600",
    color: "#101010",
  },
});
