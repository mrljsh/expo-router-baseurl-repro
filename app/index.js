import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View style={{ padding: 24, gap: 16 }}>
      <Text>baseUrl is "/m"</Text>
      {/* Route name starts with the same letter as the baseUrl → broken */}
      <Link href="/menu">Go to /menu (expected /m/menu, actual /m/enu)</Link>
      {/* Route name does not share a prefix with the baseUrl → works */}
      <Link href="/profile">Go to /profile (works)</Link>
    </View>
  );
}
