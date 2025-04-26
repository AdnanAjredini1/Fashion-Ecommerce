import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import HeaderBack from "../components/HeaderBack";
import FavoriteItemsWrapper from "../components/FavoriteComponents/FavoriteItemsWrapper";
import { mensFashion } from "../assets/man-fashion-Data";

export default function BagScreen() {
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
        <HeaderBack text="Bag" />
      </Animated.View>
      <FavoriteItemsWrapper
        data={mensFashion}
        isBag={true}
        onScroll={handleScroll}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    flex: 1,
  },
  animatedHeader: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#f1f1f3",
  },
});
