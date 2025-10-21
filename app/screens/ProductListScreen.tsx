import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ProductDetail from "./ProductDetailScreen"

type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { name: string; description: string };
};

export default function ProductListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ProductList'>>();

  const products = [
    { id: 1, name: "Laptop", description: "A powerful laptop for work and play." },
    { id: 2, name: "Mouse", description: "A smooth and responsive wireless mouse." },
    { id: 3, name: "Keyboard", description: "A mechanical keyboard with RGB lighting." },
  ];

  return (
    <View style={styles.container}>
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.item}
          onPress={() =>
            navigation.navigate("ProductDetail", {
              name: product.name,
              description: product.description,
            })
          }
        >
          <Text style={styles.text}>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    backgroundColor: "#f8f8f8",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: { fontSize: 18, fontWeight: "600" },
});
