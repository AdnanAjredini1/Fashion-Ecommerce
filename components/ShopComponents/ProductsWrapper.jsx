import { View, Text, FlatList, StyleSheet } from "react-native";
import ShopProductCard from "./ShopProductCard";
import RecommendStyles from "./RecommendStyles";

function renderItem(item) {
  return (
    <ShopProductCard
      title={item.item.name}
      image={item.item.image}
      description={item.item.description}
      price={item.item.price}
    />
  );
}
export default function ProductsWrapper({ data, onScroll, isSearch }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{ gap: 10 }}
      ListHeaderComponent={isSearch ? "" : RecommendStyles}
      ListFooterComponent={<View style={{ paddingBottom: 130 }} />}
      onScroll={onScroll}
      style={isSearch ? { paddingTop: 60 } : ""}
    />
  );
}
