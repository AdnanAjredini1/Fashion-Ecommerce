import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "../components/Header";
import FavoriteItemsWrapper from "../components/FavoriteComponents/FavoriteItemsWrapper";
import { womensFashion } from "../assets/women-fashion-Data";

export default function FavoritesScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const headerTranslate = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;

    if (currentOffset > previousScrollY && currentOffset > 50) {
      // Scroll Down
      Animated.timing(headerTranslate, {
        toValue: -100,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else if (currentOffset < previousScrollY) {
      // Scroll Up
      Animated.timing(headerTranslate, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

    setPreviousScrollY(currentOffset);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.animatedHeader,
          { transform: [{ translateY: headerTranslate }], top: insets.top },
        ]}
      >
        <Header mainPage={true} />
      </Animated.View>
      <FavoriteItemsWrapper
        data={womensFashion}
        isBag={false}
        onScroll={handleScroll}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
  },
  animatedHeader: {
    position: "absolute",

    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#f1f1f3",
  },
});
