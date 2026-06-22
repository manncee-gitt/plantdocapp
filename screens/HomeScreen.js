import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "Please allow camera access!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      navigation.navigate("Result", { imageUri: result.assets[0].uri });
    }
  };

  const openGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "Please allow photo access!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      navigation.navigate("Result", { imageUri: result.assets[0].uri });
    }
  };

  const chooseImageSource = () => {
    Alert.alert("Scan a Plant", "Choose how to add a leaf photo", [
      { text: "Take Photo", onPress: openCamera },
      { text: "Choose from Gallery", onPress: openGallery },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7F2" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home Dashboard</Text>
          <TouchableOpacity
            style={styles.profileIconWrapper}
            onPress={() => navigation.navigate("Login")}
          >
            <Ionicons name="person-outline" size={20} color="#4A5D23" />
          </TouchableOpacity>
        </View>

        <View style={styles.weatherCard}>
          <View style={styles.weatherLeft}>
            <Ionicons name="sunny" size={36} color="#FDB813" />
            <View style={styles.weatherTextContainer}>
              <Text style={styles.weatherLocation}>Kathmandu</Text>
              <Text style={styles.weatherTemp}>Sunny, 28C</Text>
            </View>
          </View>
          <View style={styles.weatherRight}>
            <View style={styles.forecastDay}>
              <Text style={styles.dayText}>Tue</Text>
              <Text style={styles.tempText}>28</Text>
            </View>
            <View style={styles.forecastDay}>
              <Text style={styles.dayText}>Wed</Text>
              <Text style={styles.tempText}>26</Text>
            </View>
            <View style={styles.forecastDay}>
              <Text style={styles.dayText}>Thu</Text>
              <Text style={styles.tempText}>27</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.scanButton}
          activeOpacity={0.8}
          onPress={chooseImageSource}
        >
          <Ionicons
            name="camera"
            size={24}
            color="#FFFFFF"
            style={styles.scanIcon}
          />
          <Text style={styles.scanButtonText}>Scan Plant</Text>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Plants</Text>
          <View style={styles.arrows}>
            <Ionicons name="chevron-back" size={20} color="#888" />
            <Ionicons name="chevron-forward" size={20} color="#555" />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <TouchableOpacity
            style={[styles.plantCard, { backgroundColor: "#A09E6D" }]}
            onPress={() =>
              navigation.navigate("PlantDetail", { plant: "Wheat" })
            }
          >
            <Text style={styles.plantName}>Wheat</Text>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=200&q=80",
              }}
              style={styles.plantImage}
            />
            <View style={[styles.statusTag, { backgroundColor: "#E1E9F1" }]}>
              <Text style={[styles.statusText, { color: "#4A708B" }]}>
                Needs Water
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.plantCard, { backgroundColor: "#738C6D" }]}
            onPress={() =>
              navigation.navigate("PlantDetail", { plant: "Maize" })
            }
          >
            <Text style={styles.plantName}>Maize</Text>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=200&q=80",
              }}
              style={styles.plantImage}
            />
            <View style={styles.statusTag}>
              <Text style={styles.statusText}>Healthy</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Text
          style={[
            styles.sectionTitle,
            { marginLeft: 20, marginTop: 10, marginBottom: 15 },
          ]}
        >
          Recent Scans
        </Text>
        <View style={styles.recentScanCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=150&q=80",
            }}
            style={styles.scanThumbnail}
          />
          <View style={styles.scanDetails}>
            <Text style={styles.scanRecordTitle}>Wheat Leaf Rust</Text>
            <Text style={styles.scanTime}>Detected 2h ago</Text>
            <Text style={styles.scanAction}>
              - Recommended: Fungicide Spray
            </Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7F2" },
  scrollContent: { paddingTop: Platform.OS === "android" ? 40 : 20 },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 25,
    position: "relative",
  },
  headerTitle: { fontSize: 22, fontWeight: "600", color: "#333" },
  profileIconWrapper: {
    position: "absolute",
    right: 20,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#4A5D23",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEFE2",
  },
  weatherCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    marginBottom: 25,
  },
  weatherLeft: { flexDirection: "row", alignItems: "center" },
  weatherTextContainer: { marginLeft: 12 },
  weatherLocation: { fontSize: 14, color: "#888", fontWeight: "500" },
  weatherTemp: { fontSize: 16, fontWeight: "bold", color: "#333" },
  weatherRight: { flexDirection: "row", gap: 12 },
  forecastDay: { alignItems: "center" },
  dayText: { fontSize: 14, color: "#333", fontWeight: "500" },
  tempText: { fontSize: 14, color: "#111", fontWeight: "bold", marginTop: 4 },
  scanButton: {
    backgroundColor: "#608151",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 30,
    elevation: 5,
    marginBottom: 30,
  },
  scanIcon: { marginRight: 10 },
  scanButtonText: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 20, fontWeight: "600", color: "#111" },
  arrows: { flexDirection: "row", gap: 8 },
  horizontalScroll: { marginBottom: 10 },
  plantCard: {
    width: 110,
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginRight: 15,
  },
  plantName: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  plantImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#FFF",
    marginBottom: 10,
  },
  statusTag: {
    backgroundColor: "#D1E6CE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: { color: "#2A4A28", fontSize: 10, fontWeight: "bold" },
  recentScanCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  scanThumbnail: { width: 60, height: 60, borderRadius: 15, marginRight: 15 },
  scanDetails: { flex: 1 },
  scanRecordTitle: { fontSize: 16, fontWeight: "600", color: "#111" },
  scanTime: { fontSize: 13, color: "#666", marginTop: 2 },
  scanAction: {
    fontSize: 13,
    color: "#4A5D23",
    fontWeight: "500",
    marginTop: 4,
  },
});
