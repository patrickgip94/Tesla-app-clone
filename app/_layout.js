import { Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = ({ children }) => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}></Stack>
      <StatusBar style="light" />
    </>
  );
};

export default _layout;
