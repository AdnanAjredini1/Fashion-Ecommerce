import { View, Text, FlatList } from "react-native";
import React from "react";

import FavoriteItem from "./FavoriteItem";

export default function FavoriteItemsWrapper({ data, isBag,onScroll }) {
  function renderItem(item) {
    return (
      <FavoriteItem
        title={item.item.name}
        image={item.item.image}
        description={item.item.description}
        price={item.item.price}
        isBag={isBag}
      />
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View style={{ paddingBottom: 140 }} />}
      onScroll={onScroll}
      style={{paddingTop:50}}
      
    />
  );
}
