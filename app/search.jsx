import { useState } from "react";
import { StyleSheet } from "react-native";
import { useDebounce } from "use-debounce";
import { Header } from "../component/header";
import { SearchInput } from "../component/search-input";
import { SearchRecipes } from "../component/SearchRecipies";
import { Wrapper } from "../component/wrapper";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [query] = useDebounce(searchQuery, 500);

  return (
    <Wrapper>
      <Header title="Search Recipes" showIcon />
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchRecipes query={query} />
    </Wrapper>
  );
}

const styles = StyleSheet.create({});
