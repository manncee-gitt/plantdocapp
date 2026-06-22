// screens/HistoryScreen.js
// screens/HistoryScreen.js
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
  // Sample scan history — later this loads from your backend
  const scans = [
    {
      plant: "Maize",
      result: "Healthy",
      healthy: true,
      date: "Yesterday, 3:15 PM",
    },
    {
      plant: "Wheat",
      result: "Leaf Rust",
      healthy: false,
      date: "June 12, 09:30 AM",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Scan History</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {scans.map((scan, index) => (
          <View key={index} style={styles.item}>
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: scan.healthy ? "#D1E6CE" : "#FBE0E0" },
              ]}
            >
              <Ionicons
                name={scan.healthy ? "checkmark-circle" : "warning"}
                size={24}
                color={scan.healthy ? "#2E8B57" : "#D32F2F"}
              />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>
                {scan.plant} — {scan.result}
              </Text>
              <Text style={styles.date}>{scan.date}</Text>
            </View>
            <View
              style={[
                styles.tag,
                { backgroundColor: scan.healthy ? "#D1E6CE" : "#FBE0E0" },
              ]}
            >
              <Text
                style={[
                  styles.tagText,
                  { color: scan.healthy ? "#2E8B57" : "#D32F2F" },
                ]}
              >
                {scan.healthy ? "Healthy" : "Diseased"}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#F5F7F2",
  },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#333" },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  details: { flex: 1 },
  title: { fontSize: 15, fontWeight: "600", color: "#333" },
  date: { fontSize: 12, color: "#666", marginTop: 4 },
  tag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  tagText: { fontSize: 11, fontWeight: "bold" },
});
