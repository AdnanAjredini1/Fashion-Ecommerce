import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function HeaderBack({text,headerStyle}) {
    const navigation = useNavigation();

    function onPressBackButton() {
        navigation.goBack();
      }
  return (
    <View style={[styles.headerContainer, headerStyle]}>
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
        {text}
      </Text>
      <View style={{ width: 35, height: 35 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",

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
});
