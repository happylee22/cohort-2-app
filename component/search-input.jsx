import { colors } from "@/constant";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export const SearchInput = ({ navigate }) => {
  const router = useRouter();
  const onPress = () => {
    router.push("/search");
  };
  if (navigate) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Feather name="search" size={25} />
        <Text style={styles.input}>Search Recipe </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <Feather name="search" size={25} />
      <TextInput
        placeholder="Search Recipe"
        style={styles.input}
        placeholderTextColor={"black"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "black",
  },
});
