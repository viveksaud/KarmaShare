import { Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <Text>Footer</Text>
    </>
  );
};

export default RootLayout;
