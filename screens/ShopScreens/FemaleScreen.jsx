import { View } from "react-native";
import React from "react";
import ProductsWrapper from "../../components/ShopComponents/ProductsWrapper";
import { womensFashion } from "../../assets/women-fashion-Data";
import useProductsByCategory from "../../Hooks/useProductsByCategory";

export default function FemaleScreen() {
  const { data } = useProductsByCategory("women");
  return (
    <View>
      <ProductsWrapper data={data ?? womensFashion} />
    </View>
  );
}
