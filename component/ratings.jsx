import { colors } from "@/constant";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export const Ratings = ({ rating }) => {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(clampedRating);
  const halfStar = clampedRating - fullStars >= 0.5 ? 1 : 0;
  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Ionicons key={index} name="star" size={16} color={colors.yellow} />
          );
        }
        if (index === fullStars && halfStar) {
          return (
            <Ionicons
              key={index}
              name="star-half"
              size={16}
              color={colors.yellow}
            />
          );
        }
        return (
          <Ionicons
            key={index}
            name="star-outline"
            size={16}
            color={colors.yellow}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
