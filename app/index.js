import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.heading}>
          baseUrl is <Text style={styles.code}>/m</Text>
        </Text>

        {/* Route name starts with the same letter as the baseUrl → broken */}
        <View style={styles.group}>
          <Link href="/menu" style={[styles.button, styles.buttonDanger]}>
            Go to /menu
          </Link>
          <Text style={styles.caption}>expected /m/menu, actual /m/enu</Text>
        </View>

        {/* Route name does not share a prefix with the baseUrl → works */}
        <View style={styles.group}>
          <Link href="/profile" style={[styles.button, styles.buttonPrimary]}>
            Go to /profile
          </Link>
          <Text style={styles.caption}>works — resolves to /m/profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F4F6FA",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 460,
    gap: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#E5E7EB",
    color: "#111827",
  },
  group: {
    gap: 6,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    overflow: "hidden",
  },
  buttonPrimary: {
    backgroundColor: "#2563EB",
    borderColor: "#1D4ED8",
    color: "#FFFFFF",
  },
  buttonDanger: {
    backgroundColor: "#DC2626",
    borderColor: "#B91C1C",
    color: "#FFFFFF",
  },
  caption: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
  },
});
