import { View, Text } from "react-native";
import React from "react";
import RecommendStyles from "../../components/ShopComponents/RecommendStyles";
import ProductsWrapper from "../../components/ShopComponents/ProductsWrapper";
import { everythingFashion } from "../../assets/everythingData";

export default function Everything({onScroll}) {
  return (
    <View>
       <ProductsWrapper data={everythingFashion} onScroll={onScroll} />
    </View>
  );
}
