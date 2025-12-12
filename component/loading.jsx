import { ActivityIndicator, View } from "react-native";

export const Loading = ({ style }) => {
  return (
    <View style={style}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
