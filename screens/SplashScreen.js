// screens/SplashScreen.js
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace("Login"), 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🌿 PlantDoc AI</Text>
      <ActivityIndicator size="large" color="#FFF" style={{ marginTop: 20 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E8B57",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { fontSize: 36, fontWeight: "bold", color: "#FFF" },
});
