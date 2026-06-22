import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ResultsScreen({ route, navigation }) {
  // We grab the photo passed from the Home Screen
  const { imageUri } = route.params;
  const [analyzing, setAnalyzing] = useState(true);

  // Fake a 3-second AI loading delay for effect
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
            <Text style={styles.diseaseName}>Potato Late Blight</Text>
          </View>
          <Text style={styles.confidence}>98.4% Confidence</Text>

          <Text style={styles.sectionTitle}>Treatment Plan:</Text>
          <Text style={styles.treatmentText}>
            1. Remove infected leaves immediately and burn them.
          </Text>
          <Text style={styles.treatmentText}>
            2. Apply a copper-based fungicide to the remaining healthy foliage.
          </Text>
          <Text style={styles.treatmentText}>
            3. Ensure good airflow between plants.
          </Text>

          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      )}
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
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
  doneButton: {
    backgroundColor: "#608151",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20,
  },
  doneButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
