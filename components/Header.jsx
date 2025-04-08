import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Header = ({ mainPage, headerStyles }) => {
  const navigate = useNavigation();

  function onPressHandler() {
    if (mainPage) {
      navigate.navigate("Home");
    } else {
      return;
    }
  }

  function onPressBag() {
    navigate.navigate("BagScreen");
  }
  return (
    <View style={[styles.container, headerStyles]}>
      <Pressable
        style={styles.iconNotificationsContainer}
        onPress={() => onPressHandler()}
      >
        {mainPage ? (
          <Entypo name="chevron-small-left" size={24} color="black" />
        ) : (
          <Ionicons name="notifications-outline" size={18} color="black" />
        )}
      </Pressable>
      <View style={styles.inputContainer}>
        <Feather name="search" size={18} color="#c5c5c5" />
        <TextInput
          style={styles.input}
          placeholder="Search here ..."
          placeholderTextColor={"#c5c5c5"}
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View
            style={{
              width: 1,
              height: 20,
              backgroundColor: "#e2d7d7",
              alignSelf: "center",
            }}
          ></View>
          <Pressable>
            <Ionicons name="filter-outline" size={20} color="#b3b1b1" />
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.iconNotificationsContainer} onPress={onPressBag}>
        <Ionicons name="bag-handle-outline" size={15} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 10,
    paddingBottom: 10,
  },
  iconNotificationsContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
  },
});

//  <Entypo name="chevron-small-left" size={24} color="black" />
