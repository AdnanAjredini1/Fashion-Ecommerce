import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function FavoriteItem({ image, title, description, price }) {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate("ProductScreen", {
      image,
      price,
      productName: title,
      description,
    });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
      <View style={{ justifyContent: "space-between" }}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="bag-handle-outline" size={18} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 20,
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    fontSize: 12,
    color: "rgba(29, 29, 29, 0.5)",
    width: "90%",
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    color: "#b90606",
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    bottom: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    backgroundColor: "#0F0601",
    borderRadius: 18,
  },
});
