import { FlatList } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { useSelectedStore } from "../store/use-selected";
import { FeaturedRecipeLoader } from "./featuredRecipeLoader";
import { Recipe } from "./recipie";
export const Recipes = () => {
  const { selected } = useSelectedStore();
  const { fetching, data } = useFetch({
    link: `recipes/list?from=0&size=10&tags=${selected}`,
  });
  //   if (fetching) {
  //     return <Loading />;
  //   }

  //   console.log({ data });

  return (
    <FeaturedRecipeLoader loading={fetching} height={150}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Recipe recipe={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          gap: 10,
          marginTop: 50,
        }}
      />
    </FeaturedRecipeLoader>
  );
};
