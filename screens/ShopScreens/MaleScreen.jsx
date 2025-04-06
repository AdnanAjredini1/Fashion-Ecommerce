import { View, Text } from "react-native";
import React from "react";
import RecommendStyles from "../../components/ShopComponents/RecommendStyles";
import ProductsWrapper from "../../components/ShopComponents/ProductsWrapper";
import { mensFashion } from "../../assets/man-fashion-Data";

export default function MaleScreen() {
  return (
    <View >
      <ProductsWrapper data={mensFashion} />
    </View>
  );
}
