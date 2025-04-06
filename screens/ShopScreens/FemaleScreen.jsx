import { View, Text } from "react-native";
import React from "react";
import RecommendStyles from "../../components/ShopComponents/RecommendStyles";
import ProductsWrapper from "../../components/ShopComponents/ProductsWrapper";
import { womensFashion } from "../../assets/women-fashion-Data";

export default function FemaleScreen() {
  return (
    <View>
      <ProductsWrapper data={womensFashion} />
    </View>
  );
}
