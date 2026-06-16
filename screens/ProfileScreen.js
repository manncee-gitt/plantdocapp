// screens/ProfileScreen.js
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>User Profile</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Login')}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', padding: 20, paddingTop: 60 }, name: { fontSize: 22, fontWeight: 'bold', marginBottom: 40 }, btn: { padding: 15, borderWidth: 1, borderColor: '#E53935', borderRadius: 8, width: '100%', alignItems: 'center' }, btnText: { color: '#E53935', fontWeight: 'bold' }});