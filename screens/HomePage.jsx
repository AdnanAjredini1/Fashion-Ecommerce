import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "../components/Header";
import Swiper from "../components/Swiper";
import menCatImg from "../assets/—Pngtree—handsome young guy avatar cartoon_5233396.png";
import Categories from "../components/Categories";
import Category from "../components/Category";
import RecommendProductCard from "../components/RecommendProductCard";
import ProductsData from "../assets/products.json";

const CATEGORIES = [
  {
    title: "Men",
    image: menCatImg,
  },
  {
    title: "Women",
    image: menCatImg,
  },
  {
    title: "Kids",
    image: menCatImg,
  },
  {
    title: "Tech",
    image: menCatImg,
  },
  {
    title: "Beauty",
    image: menCatImg,
  },
  {
    title: "Home",
    image: menCatImg,
  },
];

function renderItem(itemData) {
  return (
    <Category category={itemData.item.title} image={itemData.item.image} />
  );
}

function renderRecommendItem(itemData) {
  return (
    <RecommendProductCard
      image={itemData.item.imageUrl}
      price={itemData.item.price}
      productName={itemData.item.title}
      description={itemData.item.description}
    />
  );
}

export default function HomePage() {
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
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={[
          styles.animatedHeader,
          { transform: [{ translateY: headerTranslate }], top: insets.top },
        ]}
      >
        <Header mainPage={false} headerStyles={styles.headerStyles} />
      </Animated.View>

      <FlatList
        data={ProductsData}
        renderItem={renderRecommendItem}
        numColumns={2}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        columnWrapperStyle={{ marginHorizontal: "5%", gap: 10 }}
        style={{ paddingBottom: 100, paddingTop: 35 }}
        ListFooterComponent={<View style={{ height: 100 }} />}
        ListHeaderComponent={
          <>
            <Swiper />
            <Categories
              data={CATEGORIES}
              categoryText="Category"
              seeAllText="See all"
              categoryTextStyle={styles.categoryTextStyle}
              seeAllTextStyle={styles.seeAllTextStyle}
              renderItem={renderItem}
            />
            <View style={styles.textsContainer}>
              <Text style={styles.categoryTextStyle}>Recommend</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.seeAllTextStyle}>See all</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoryTextStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
  seeAllTextStyle: {
    color: "#ED600E",
    fontWeight: "400",
  },
  textsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "5%",
    marginVertical: 13,
  },
  headerStyles: {
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
