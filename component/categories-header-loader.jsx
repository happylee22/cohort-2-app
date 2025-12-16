import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { FlatList } from "react-native";
import { scaleFontSize } from "../utils";

export const CategoriesHeaderLoader = () => {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
    >
      <FlatList
        data={[...Array(8).keys()]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <Skeleton
            colorMode="light"
            // transition={{
            //   translateX: {
            //     type: 'spring',
            //   },
            // }}
            height={scaleFontSize(28)}
            width={scaleFontSize(60)}
          />
        )}
        contentContainerStyle={{ gap: 15, marginTop: 15 }}
      />
    </MotiView>
  );
};
