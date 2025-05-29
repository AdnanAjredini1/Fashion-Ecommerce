import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React, { memo, useCallback, useState } from "react";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { isLikedActions } from "../store/isLikedSlice";
import { truncateString } from "../assets/helpers/helpers";

function RecommendProductCard({ image, price, productName, description }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  const onPressFavoriteButton = useCallback(() => {
    setIsFavorite((prev) => !prev);
  }, []);

  const onPressRecoProductCard = useCallback(() => {
    navigation.navigate("ProductScreen", {
      image,
      price,
      productName,
      description,
    });
  }, [image, price, productName, description]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onPressRecoProductCard}
    >
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: "100%", borderRadius: 20 }}
        resizeMode="cover"
      />
      <BlurView
        style={styles.priceAndNameContainer}
        intensity={34}
        tint="systemChromeMaterialDark"
      >
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.productPrice}>${price}</Text>
          <Text style={styles.productName}>
            {truncateString(productName?.toString() || "", 11)}
          </Text>
        </View>

        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="bag-handle-outline" size={18} color="white" />
        </TouchableOpacity>
      </BlurView>
      <Pressable
        style={styles.favoriteIconContainer}
        onPress={onPressFavoriteButton}
      >
        {isFavorite ? (
          <Ionicons name="heart" size={18} color="#f55858" />
        ) : (
          <Ionicons name="heart-outline" size={18} color="black" />
        )}
      </Pressable>
    </TouchableOpacity>
  );
}
export default memo(RecommendProductCard);

const width = Dimensions.get("window").width;

const cardHeight = (width * 65) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: cardHeight,
    borderRadius: 20,
    marginBottom: 14,
  },
  priceAndNameContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 10,
    width: "90%",
    height: 60,
    alignSelf: "center",
    borderRadius: 18,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  productPrice: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  productName: {
    color: "white",
    fontSize: 12,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    backgroundColor: "#0F0601",
    borderRadius: 18,
  },
  favoriteIconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 31,
    height: 31,
    borderRadius: 15.5,
  },
});
