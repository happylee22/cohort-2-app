import { ScrollView, StyleSheet } from "react-native";
import { Header } from "../component/header";
import { Home } from "../component/home";
import { Wrapper } from "../component/wrapper";
const HomeScreen = () => {
  return (
    <Wrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Header title="Home" />
        <Home />
      </ScrollView>
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
