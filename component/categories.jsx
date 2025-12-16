import { useFetch } from "@/hooks/useFetch";
import { View } from "react-native";
import { CategoriesHeaderLoader } from "./categories-header-loader";
import { CategoriesHeader } from "./categoriesHeader";
import { Recipes } from "./recipies";
export const Categories = () => {
  const { fetching, data } = useFetch({
    link: "tags/list",
  });
  const categories = data?.map((item) => item.name)?.slice(0, 8);
  if (fetching) {
    return <CategoriesHeaderLoader />;
  }

  return (
    <View style={{ gap: 30 }}>
      <CategoriesHeader categories={categories} />
      <Recipes />
    </View>
  );
};
