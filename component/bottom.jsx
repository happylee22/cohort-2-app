import { colors } from "@/constant";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./customButton";

export const Bottom = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Inner View */}
      <View>
        <Text style={[styles.text, styles.bigText]}>Get</Text>
        <Text style={[styles.text, styles.bigText]}> Cooking</Text>
      </View>
      {/* Inner View */}
      <Text style={[styles.text]}>Simple way to find Tasty Recipe</Text>
      <Button
        text="Start Cooking ->"
        style={{
          width: "60%",
          marginHorizontal: "auto",
        }}
        onPress={() => router.push("/homeScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    color: colors.green,
    textAlign: "center",
  },
  bigText: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
