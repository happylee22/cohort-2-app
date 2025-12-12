import { colors } from "@/constant";
import { useSelectedStore } from "@/store/use-selected";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { changeFirstLatterToUpperCase, scaleFontSize } from "../utils";
export const CategoriesHeader = ({ categories }) => {
  const { selected, setSelected } = useSelectedStore();
  useEffect(() => {
    if (categories && categories.length > 0 && !selected) {
      setSelected(categories[0]);
    }
  }, [selected, categories]);
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.button, item === selected && styles.selectButton]}
          onPress={() => setSelected(item)}
        >
          <Text style={[styles.text, item === selected && styles.selectText]}>
            {changeFirstLatterToUpperCase(item)}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      contentContainerStyle={{ gap: 15 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.green,
    fontWeight: "500",
    fontSize: scaleFontSize(16),
  },
  selectText: {
    color: colors.white,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  selectButton: {
    backgroundColor: colors.green,
  },
});
