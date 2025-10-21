import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Mon profile</Text>
      <Text style={styles.info}>Nom: John Doe</Text>
      <Text style={styles.info}>Nom d'utilisateur: @johndoe</Text>
      <Text style={styles.info}>Email: john.doe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  info: { fontSize: 16, color: "#444", marginBottom: 6 },
});
