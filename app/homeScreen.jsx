import { StyleSheet } from "react-native";
import { Header } from "../component/header";
import { Home } from "../component/home";
import { Wrapper } from "../component/wrapper";
const HomeScreen = () => {
  return (
    <Wrapper>
      <Header title="Home" />
      <Home />
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
