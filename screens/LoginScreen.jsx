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
            <Login isFocused={isFocused} />
            {!isFocused && (
              <View style={{ gap: 20 }}>
                <LoginButton btnText="LOGIN" isFocused={!isFocused} />
                <Text style={styles.orText}>or</Text>
                <LoginButton
                  btnText="CREATE AN ACCOUNT"
                  isFocused={!isFocused}
                  btnStyle={
                    !isFocused
                      ? {
                          borderWidth: 1,
                          borderColor: "#ED600E",
                          backgroundColor: "white",
                        }
                      : ""
                  }
                  textBtnStyle={
                    !isFocused
                      ? {
                          color: "#ED600E",
                        }
                      : ""
                  }
                />
              </View>
            )}
            {isFocused && (
              <View style={{ gap: 20 }}>
                <LoginButton
                  btnText="CREATE AN ACCOUNT"
                  isFocused={isFocused}
                />

                <Text style={styles.orText}>or</Text>

                <LoginButton
                  btnText="LOGIN"
                  isFocused={!isFocused}
                  btnStyle={
                    isFocused
                      ? {
                          borderWidth: 1,
                          borderColor: "#ED600E",
                          backgroundColor: "white",
                        }
                      : ""
                  }
                  textBtnStyle={
                    isFocused
                      ? {
                          color: "#ED600E",
                        }
                      : ""
                  }
                />
              </View>
            )}
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
  orText: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(29,29,29,0.7)",
  },
});
