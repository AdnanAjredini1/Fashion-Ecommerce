import { View } from "react-native";
import React from "react";
import ProductsWrapper from "../../components/ShopComponents/ProductsWrapper";
import { everythingFashion } from "../../assets/everythingData";
import useProductsByCategory from "../../Hooks/useProductsByCategory";

export default function Everything({ onScroll }) {
  const { data } = useProductsByCategory("Everything");
  return (
    <View>
      <ProductsWrapper data={data ?? everythingFashion} onScroll={onScroll} />
    </View>
  );
}
