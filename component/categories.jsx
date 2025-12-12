import { useFetch } from "@/hooks/useFetch";
import { View } from "react-native";
import { CategoriesHeader } from "./categoriesHeader";
import { Loading } from "./loading";
import { Recipes } from "./recipies";
export const Categories = () => {
  const { fetching, data } = useFetch({
    link: "tags/list",
  });
  const categories = data?.map((item) => item.name)?.slice(0, 8);
  if (fetching) {
    return <Loading />;
  }

  return (
    <View style={{ gap: 30 }}>
      <CategoriesHeader categories={categories} />
      <Recipes />
    </View>
  );
};
