import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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
  return (
    <SafeAreaView>
      <Header mainPage={false} headerStyles={styles.headerStyles} />
      <FlatList
        data={ProductsData}
        renderItem={renderRecommendItem}
        numColumns={2}
        columnWrapperStyle={{ marginHorizontal: "5%", gap: 10 }}
        style={{ marginBottom: 130 }}
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
    fontWeight: 600,
  },
  seeAllTextStyle: {
    color: "#ED600E",
    fontWeight: 400,
  },
  textsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "5%",
    marginVertical: 13,
  },
  headerStyles:{
    marginHorizontal: "5%",
  }
});
