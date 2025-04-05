import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function CarouselButton({ btnStyles, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, btnStyles]} onPress={onPress}>
      <Text style={styles.text}>Shop Now</Text>
      <View style={styles.iconContainer}>
        <Feather name="arrow-up-right" size={18} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    width: "50%",
    height: 35,
    paddingHorizontal: 11,
  },
  text: {
    fontSize: 16,
    color: "#ED600E",
    fontWeight: 600,
  },
  iconContainer: {
    backgroundColor: "#ED600E",
    padding: 3,
    borderRadius: "50%",
  },
});
