import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Profile</Text>
      <TouchableOpacity style={styles.threeDotsContainer}>
        <Entypo name="dots-three-horizontal" size={17} color="rgba(29,29,29,0.58)" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  threeDotsContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
