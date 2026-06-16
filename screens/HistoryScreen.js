// screens/HistoryScreen.js
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Scan History</Text>
      <ScrollView>
        <View style={styles.item}>
          <Text style={styles.title}>Potato - Late Blight</Text>
          <Text style={styles.date}>Today, 10:42 AM</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Maize - Healthy</Text>
          <Text style={styles.date}>Yesterday, 3:15 PM</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Wheat - Leaf Rust</Text>
          <Text style={styles.date}>June 12, 09:30 AM</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, padding: 20, paddingTop: 40, backgroundColor: '#F5F7EC' }, 
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }, 
  item: { backgroundColor: '#FFF', padding: 15, borderRadius: 8, elevation: 1, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#2E8B57' },
  date: { fontSize: 12, color: '#666', marginTop: 5 }
});