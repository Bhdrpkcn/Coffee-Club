import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Products = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Products {id}</Text>
    </View>
  );
};

export default Products;
