import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "../components/HeaderBack";
import Header from "../components/Header";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header mainPage={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
  },
});
