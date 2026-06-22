import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PLANT_DATA = {
  Wheat: {
    color: "#A09E6D",
    diseases: ["Leaf Rust", "Stem Rust", "Powdery Mildew"],
    care: "Wheat grows best in cool, dry weather. Water regularly but avoid waterlogging. Watch for orange or brown spots on leaves, which often signal rust diseases.",
    tip: "Inspect leaves weekly during the growing season for early signs of rust.",
  },
  Maize: {
    color: "#738C6D",
    diseases: ["Common Rust", "Gray Leaf Spot", "Northern Leaf Blight"],
    care: "Maize needs warm weather and full sunlight. Ensure good spacing between plants for airflow, which helps prevent fungal diseases.",
    tip: "Remove and destroy infected leaves early to stop disease from spreading.",
  },
};

export default function PlantDetailScreen({ route }) {
  const { plant } = route.params;
  const data = PLANT_DATA[plant];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      >
        <View style={[styles.banner, { backgroundColor: data.color }]}>
          <Ionicons name="leaf" size={28} color="#FFF" />
          <Text style={styles.plantName}>{plant}</Text>
        </View>

        <Text style={styles.sectionLabel}>Common Diseases</Text>
        <View style={styles.card}>
          {data.diseases.map((d, i) => (
            <View key={i} style={styles.diseaseRow}>
              <Ionicons name="alert-circle-outline" size={18} color="#D32F2F" />
              <Text style={styles.diseaseText}>{d}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Care Guide</Text>
        <View style={styles.card}>
          <Text style={styles.bodyText}>{data.care}</Text>
        </View>

        <Text style={styles.sectionLabel}>Tip</Text>
        <View style={[styles.card, styles.tipCard]}>
          <View style={styles.tipRow}>
            <Ionicons name="bulb-outline" size={20} color="#608151" />
            <Text style={styles.tipText}>{data.tip}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7F2" },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    gap: 12,
  },
  plantName: { fontSize: 24, fontWeight: "bold", color: "#FFF" },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#888",
    marginBottom: 8,
    marginLeft: 4,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 2,
  },
  diseaseRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  diseaseText: { fontSize: 15, color: "#333" },
  bodyText: { fontSize: 15, color: "#444", lineHeight: 23 },
  tipCard: { backgroundColor: "#EBEFE2" },
  tipRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  tipText: { fontSize: 14, color: "#2E4620", lineHeight: 21, flex: 1 },
});
