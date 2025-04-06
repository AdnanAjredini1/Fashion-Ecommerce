import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function RecommendStyles() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recommend Styles</Text>
      <Pressable style={styles.sortByContainer}>
        <Text>Sort by</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sortByContainer: {
    flexDirection:'row',
    gap:2,
    alignItems:'center',
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius:20,
  },
});
