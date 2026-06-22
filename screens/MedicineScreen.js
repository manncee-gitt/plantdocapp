// screens/MedicineScreen.js
import { StyleSheet, Text, View } from "react-native";

export default function MedicineScreen({ route }) {
  const { treatment } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Action</Text>
      <View style={styles.card}>
        <Text style={styles.desc}>{treatment}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  desc: { fontSize: 16, lineHeight: 24 },
});
