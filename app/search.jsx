import { StyleSheet } from "react-native";
import { Header } from "../component/header";
import { SearchInput } from "../component/search-input";
import { Wrapper } from "../component/wrapper";

const Search = () => {
  return (
    <Wrapper>
      <Header title="Search Recipe" showIcon />
      <SearchInput />
    </Wrapper>
  );
};

export default Search;

const styles = StyleSheet.create({});
