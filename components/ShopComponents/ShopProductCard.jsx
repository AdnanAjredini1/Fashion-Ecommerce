import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { truncateString } from "../../assets/helpers/helpers";

export default function ShopProductCard({ image, title, price, description }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: "54%" }}
        resizeMode="cover"
      />
      <View style={styles.secondPart}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {truncateString(description, 42)}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="bag-handle-outline" size={15} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const width = Dimensions.get("window").width;

const cardHeight = (width * 65) / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: cardHeight,
    borderRadius: 20,
    marginBottom: 14,
    overflow: "hidden",
  },
  secondPart: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  title: {
    fontWeight: 700,
  },
  description: {
    fontSize: 12,
    color: "rgba(29, 29, 29, 0.5)",
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    color: "#b90606",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 18,
  },
});
