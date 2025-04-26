import { StyleSheet, Animated } from "react-native";
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import HeaderBack from "../components/HeaderBack";
import Header from "../components/Header";
import ProductsWrapper from "../components/ShopComponents/ProductsWrapper";
import { everythingFashion } from "../assets/everythingData";


export default function SearchScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const headerTranslate = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");


const filteredProducts = everythingFashion.filter((item) =>
  item.name.toLowerCase().includes(searchText.toLowerCase())
);


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
        <Header mainPage={true} setSearchTextFun={setSearchText} />
      </Animated.View>
      {
        searchText.length > 0 ?   <ProductsWrapper data={filteredProducts} onScroll={handleScroll} isSearch={true}/>
        :""
      }
    
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
