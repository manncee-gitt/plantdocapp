import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MedicineScreen({ route }) {
  const { result } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      >
        <View style={styles.diseaseBanner}>
          <Ionicons name="leaf" size={22} color="#608151" />
          <Text style={styles.diseaseText}>{result.disease}</Text>
        </View>

        <Text style={styles.sectionLabel}>Recommended Medicine</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="medkit" size={22} color="#608151" />
            <Text style={styles.medicineName}>{result.medicine}</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>Dosage</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>{result.dosage}</Text>
        </View>

        <Text style={styles.sectionLabel}>How to Apply</Text>
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Ionicons name="water-outline" size={18} color="#608151" />
            <Text style={styles.cardText}>{result.application}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={18} color="#608151" />
            <Text style={styles.cardText}>{result.frequency}</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>Precautions</Text>
        <View style={[styles.card, styles.warningCard]}>
          <View style={styles.infoRow}>
            <Ionicons name="warning-outline" size={20} color="#D32F2F" />
            <Text style={styles.warningText}>{result.precautions}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7F2" },
  diseaseBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBEFE2",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
    gap: 10,
  },
  diseaseText: { fontSize: 18, fontWeight: "bold", color: "#2E4620" },
  sectionLabel: {
    fontSize: 14,
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
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  medicineName: { fontSize: 17, fontWeight: "600", color: "#333" },
  cardText: { fontSize: 15, color: "#444", lineHeight: 22, flex: 1 },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  warningCard: { backgroundColor: "#FDEDED" },
  warningText: { fontSize: 14, color: "#8B2020", lineHeight: 21, flex: 1 },
});
