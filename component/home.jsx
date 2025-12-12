import { StyleSheet, View } from "react-native";
import { Categories } from "./categories";
import { Featured } from "./featured";
import { SearchInput } from "./search-input";
export const Home = () => {
  return (
    <View style={styles.container}>
      <SearchInput navigate />
      <Featured />
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
