import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "./LoginSignUpScreens/Login";
import LoginButton from "../components/LoginComponents.jsx/LoginButton";

const TopTabs = createMaterialTopTabNavigator();

const screenHeight = Dimensions.get("window").height;

export default function LoginScreen() {
  const [isFocused, setIsFocused] = useState(false);

  const onPress = () => {
    setIsFocused(!isFocused);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ minHeight: screenHeight }}>
        <View style={styles.container}>
          <Text>Profile</Text>
          <View style={styles.container2}>
            <View style={styles.headerButtonsContainer}>
              <LoginButton
                btnText="Login"
                onPress={onPress}
                isFocused={!isFocused}
              />

              <LoginButton
                btnText="Sign Up"
                onPress={onPress}
                isFocused={isFocused}
              />
            </View>
            <Login isFocused={isFocused} setIsFocused={setIsFocused} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    elevation: 2,
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    marginTop: 20,
    padding: 10,
    elevation: 5,
    paddingBottom: 20,
  },
  headerButtonsContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
