import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { Header } from "../component/header";
import { RecipeDetails } from "../component/recipe-details";
import { Wrapper } from "../component/wrapper";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <Wrapper>
      <Header title={""} showIcon />
      <RecipeDetails id={id} />
    </Wrapper>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
