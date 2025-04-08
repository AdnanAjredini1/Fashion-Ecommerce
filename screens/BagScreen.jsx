import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "../components/HeaderBack";
import FavoriteItemsWrapper from "../components/FavoriteComponents/FavoriteItemsWrapper";
import { mensFashion } from "../assets/man-fashion-Data";

export default function BagScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack text="Bag" />
      <FavoriteItemsWrapper data={mensFashion} isBag={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    flex: 1,
  },
});
