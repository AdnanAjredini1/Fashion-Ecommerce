import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../../components/LoginComponents.jsx/Input";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import LoginButton from "../../components/LoginComponents.jsx/LoginButton";
import { authHandler } from "../../utils/authHandler";
import { useNavigation } from "@react-navigation/native";

export default function Login({ isFocused, setIsFocused }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  function onChangeText(key, value) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  console.log("user from redux", user);

  useEffect(() => {
    setInput({
      username: "",
      email: "",
      password: "",
    });
  }, [isFocused]);

  function onPressForgotPassword() {
    navigation.navigate("ResetPassword");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        {isFocused && (
          <Input
            placeholder="Username"
            value={input.username}
            onChangeText={(text) => onChangeText("username", text)}
          />
        )}
        <Input
          placeholder="Your E-Mail Address"
          value={input.email}
          onChangeText={(text) => onChangeText("email", text)}
        />
        <Input
          placeholder="Your Password"
          value={input.password}
          onChangeText={(text) => onChangeText("password", text)}
        />
      </View>
      {!isFocused && (
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={onPressForgotPassword}
        >
          <Text
            style={{
              textAlign: "right",
              color: "rgba(29,29,29,0.7)",
              marginBottom: 20,
            }}
          >
            Forgot My Password
          </Text>
        </TouchableOpacity>
      )}
      {!isFocused && (
        <View style={{ gap: 20 }}>
          <LoginButton
            btnText="LOGIN"
            isFocused={!isFocused}
            onPress={() => authHandler(input, dispatch, navigation, "login")}
          />
          <Text style={styles.orText}>or</Text>
          <LoginButton
            btnText="CREATE AN ACCOUNT"
            onPress={() => setIsFocused(true)}
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
            onPress={() => authHandler(input, dispatch, navigation, "register")}
          />

          <Text style={styles.orText}>or</Text>

          <LoginButton
            btnText="LOGIN"
            isFocused={!isFocused}
            onPress={() => setIsFocused(false)}
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 20,
  },
  inputsContainer: {
    gap: 10,
    marginVertical: 20,
  },
  orText: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(29,29,29,0.7)",
  },
});
