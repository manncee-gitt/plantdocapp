import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResultsScreen({ route, navigation }) {
  const { imageUri } = route.params;
  const [analyzing, setAnalyzing] = useState(true);

  // Placeholder result (real CNN model integration in progress)
  const result = {
    disease: "Maize Common Rust",
    confidence: "96.2%",
    medicine: "Mancozeb 75% WP",
    dosage: "2.5 grams per liter of water",
    application: "Spray on both sides of leaves",
    frequency: "Every 7-10 days",
    precautions:
      "Wear gloves and a mask. Do not spray before rain. Keep away from children.",
    treatment: [
      "Remove and destroy heavily infected leaves.",
      "Apply a fungicide such as Mancozeb to healthy foliage.",
      "Ensure good spacing between plants for airflow.",
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnalyzing(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analysis Results</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Image source={{ uri: imageUri }} style={styles.image} />

        {analyzing ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#608151" />
            <Text style={styles.loadingText}>
              PlantDoc AI is analyzing your leaf...
            </Text>
          </View>
        ) : (
          <View style={styles.resultCard}>
            <View style={styles.diseaseHeader}>
              <Ionicons name="warning" size={24} color="#D32F2F" />
              <Text style={styles.diseaseName}>{result.disease}</Text>
            </View>
            <Text style={styles.confidence}>
              {result.confidence} Confidence
            </Text>

            <Text style={styles.sectionTitle}>Treatment Plan:</Text>
            {result.treatment.map((step, i) => (
              <Text key={i} style={styles.treatmentText}>
                {i + 1}. {step}
              </Text>
            ))}

            <TouchableOpacity
              style={styles.medicineButton}
              onPress={() => navigation.navigate("Medicine", { result })}
            >
              <Ionicons name="medkit-outline" size={20} color="#FFF" />
              <Text style={styles.medicineButtonText}>
                View Medicine Details
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7F2" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#333" },
  image: {
    width: "90%",
    height: 300,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  resultCard: {
    backgroundColor: "#FFF",
    margin: 20,
    padding: 25,
    borderRadius: 24,
    elevation: 4,
  },
  diseaseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  diseaseName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D32F2F",
    marginLeft: 10,
  },
  confidence: { fontSize: 14, color: "#666", marginBottom: 20, marginLeft: 34 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  treatmentText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 24,
    marginBottom: 8,
  },
  medicineButton: {
    flexDirection: "row",
    backgroundColor: "#608151",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 8,
  },
  medicineButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  doneButton: {
    backgroundColor: "#EBEFE2",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 12,
  },
  doneButtonText: { color: "#608151", fontSize: 16, fontWeight: "bold" },
});
