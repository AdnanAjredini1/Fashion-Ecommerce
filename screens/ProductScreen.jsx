import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation, useRoute } from "@react-navigation/native";
import productsSideImages from "../assets/product-side-images.json";
import { truncateString } from "../assets/helpers/helpers";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "../components/Button";

const SIZES = ["XS", "S", "M", "L", "XL"];
const COLORS = ["#EF600E", "black"];

export default function ProductScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { image, price, productName, description } = route.params;
  const [activeSideImage, setActiveSideImage] = useState(image);
  const width = Dimensions.get("window").width;
  const widthProductName = (width * 5.9) / 100;

  function onPressBackButton() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.leftIconContainer}
          onPress={onPressBackButton}
        >
          <Entypo name="chevron-small-left" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          Product Details
        </Text>
        <View style={{ width: 35, height: 35 }}></View>
      </View>
      <ScrollView style={{ marginBottom: 90 }}>
        <View style={styles.imagesContainer}>
          <Image
            source={{ uri: activeSideImage }}
            width="100%"
            height="100%"
            resizeMode="cover"
          />
          <View style={{ position: "absolute", left: 10, zIndex: 2 }}>
            {productsSideImages.map((item) => (
              <TouchableOpacity
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: item.item,
                  marginBottom: 10,
                  borderRadius: 10,
                  borderColor: "#EF600E",
                  overflow: "hidden",
                  borderWidth: 1,
                }}
                onPress={() => setActiveSideImage(item.imageUrl)}
                key={item.description + Math.random().toString()}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  width="100%"
                  height="100%"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.namePriceContainer}>
          <Text style={styles.productName}>
            {truncateString(productName, widthProductName)}
          </Text>
          <View style={styles.priceReviewContainer}>
            <Text style={styles.priceText}>${price}</Text>
            <View style={styles.reviewContainer}>
              <FontAwesome name="star" size={12} color="#FF9529" />
              <Text style={{ fontSize: 12 }}>
                4/5{" "}
                <Text
                  style={{
                    fontSize: 11,
                    textAlign: "center",
                    color: "rgba(29,29,29,0.5)",
                  }}
                >
                  (500+ Review)
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.namePriceContainer}>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>Sizes</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
              {SIZES.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={{
                    width: 28,
                    height: 28,
                    borderWidth: 2,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                  }}
                >
                  <Text style={{ fontWeight: "500" }}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>Colors</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
              {COLORS.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={{
                    backgroundColor: item,
                    width: 28,
                    height: 28,

                    borderRadius: 50,
                  }}
                ></TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ fontSize: 19, fontWeight: "600" }}>Description</Text>
          <Text style={{fontSize:13,color:'rgba(29,29,29,0.5)'}}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonsWrapper}>
        <Button
          btnText="Add to Wishlist"
          buttonStyles={{ backgroundColor: "#F1F1F3" }}
          btnTextStyles={{ color: "#EF600E" }}
        />
        <Button btnText="Add to Bag" />
      </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");
const heightImageCont = (height * 60) / 100;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginHorizontal: "5%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  imagesContainer: {
    position: "relative",
    backgroundColor: "red",
    width: "90%",
    height: heightImageCont,
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
  },
  namePriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    marginTop: 20,
  },
  priceReviewContainer: {
    justifyContent: "center",
  },
  productName: {
    fontSize: 21,
    fontWeight: "700",
  },
  priceReviewContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  priceText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#b90606",
    alignSelf: "flex-end",
  },
  sizeContainer: {
    justifyContent: "center",
    gap: 10,
  },
  sizeText: {
    fontSize: 19,
    fontWeight: "600",
  },
  buttonsWrapper: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: "5%",
    gap: 15,
    backgroundColor: "#F1F1F3",
    paddingVertical: 20,
  },
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: "5%",
    gap:10
  },
});
