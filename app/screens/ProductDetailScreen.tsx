import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ProductDetailScreenProps = {
  route: {
    params: {
      name: string;
      description: string;
    };
  };
};

export default function ProductDetailScreen({ route }: ProductDetailScreenProps) {
  const { name, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  description: { fontSize: 16, lineHeight: 22, color: "#555" },
});
