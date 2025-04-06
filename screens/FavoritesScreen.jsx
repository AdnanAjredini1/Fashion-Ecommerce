import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import FavoriteItemsWrapper from "../components/FavoriteComponents/FavoriteItemsWrapper";
import { womensFashion } from "../assets/women-fashion-Data";

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header mainPage={true} />
      <FavoriteItemsWrapper data={womensFashion} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
 
  },
});
