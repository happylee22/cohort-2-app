import { Ratings } from "@/component/ratings";
import { RecipeFooter } from "@/component/recipeFooter";
import { scaleFontSize, trimText } from "@/utils";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const { width } = Dimensions.get("window");
export const FeaturedRecipe = ({ recipe }) => {
  const boxWidth = (width - 40) * 0.8;
  const recipeName = trimText(recipe.name, 15);
  const authorName =
    recipe.credits && recipe.credits?.length > 0
      ? recipe.credits[0]?.name
      : "unknown";
  const totalTime = recipe?.total_time_minutes;
  const ratings = recipe.user_ratings?.score * 5;
  return (
    <View style={[styles.container, { width: boxWidth }]}>
      <Text style={styles.title}>{recipeName}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={recipe.thumbnail_url}
          contentFit="cover"
          placeholder={require("@/assets/images/chef.png")}
        />
      </View>
      <Ratings rating={ratings} />
      <RecipeFooter authorName={authorName} totalTime={totalTime} />
    </View>
  );
};

const imageWidth = width * 0.25;
const styles = StyleSheet.create({
  container: {
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    // position: "relative",
    padding: 25,
    paddingTop: 32,
    borderRadius: 10,
    // marginHorizontal: 8,
    overflow: "visible",
  },
  title: {
    fontSize: scaleFontSize(15),
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 50,
    overflow: "hidden",
    position: "absolute",
    right: 5,
    top: imageWidth / -10,
  },
  image: { width: "100%", height: "100%" },
});
