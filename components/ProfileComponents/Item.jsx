import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { memo } from "react";
import { useNavigation } from "@react-navigation/native";

function Item({ icon, title }) {
  const navigation = useNavigation();
  function onPress() {
    navigation.navigate("ProfileItemScreen");
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleIconContainer}>
        <TouchableOpacity>{icon}</TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View>
        <SimpleLineIcons
          name="arrow-right"
          size={16}
          color="rgba(29,29,29,0.58)"
        />
      </View>
    </TouchableOpacity>
  );
}

export default memo(Item);

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
    fontWeight: "600",
  },
});
