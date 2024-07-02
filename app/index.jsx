import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    // <View style={styles.container}>
    <View className="flex-1 items-center justify-center bg-blue">
      <Text className="text-3xl">Bibek react-native app-1 !</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go To Profile
      </Link>
    </View>
  );
}

