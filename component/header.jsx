import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Header = ({ showIcon, title }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {showIcon ? (
        <Pressable onPress={() => router.back()}>
          <AntDesign name="arrow-left" size={22} />
        </Pressable>
      ) : (
        <View style={{ width: 50, height: 1 }} />
      )}
      {title && <Text style={styles.text}>{title}</Text>}
      <View style={{ width: 50, height: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
