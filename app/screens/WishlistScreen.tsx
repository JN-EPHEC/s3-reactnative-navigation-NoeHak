import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>La liste est vide</Text>
      <Text style={styles.sub}>Ajoute des cours</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "600" },
  sub: { color: "#666", marginTop: 6 },
});
