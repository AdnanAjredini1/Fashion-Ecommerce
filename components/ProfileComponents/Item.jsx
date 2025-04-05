import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function Item({ icon, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleIconContainer}>
        <TouchableOpacity>{icon}</TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity>
        <SimpleLineIcons
          name="arrow-right"
          size={16}
          color="rgba(29,29,29,0.58)"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleIconContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  title: {
    fontWeight:"600"
  },
});
