import { View, Text, FlatList } from "react-native";
import React from "react";
import { data } from "../../assets/profileItemsData";
import FavoriteItem from "./FavoriteItem";

function renderItem(item) {
  return (
    <FavoriteItem
      title={item.item.name}
      image={item.item.image}
      description={item.item.description}
      price={item.item.price}
    />
  );
}

export default function FavoriteItemsWrapper({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
