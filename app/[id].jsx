import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { Header } from "../component/header";
import { Wrapper } from "../component/wrapper";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <Wrapper>
      <Header title={""} showIcon />
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{id} </Text>
    </Wrapper>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
