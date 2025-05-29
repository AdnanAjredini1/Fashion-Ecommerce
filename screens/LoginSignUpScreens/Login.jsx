import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../components/LoginComponents.jsx/Input";

export default function Login({ isFocused }) {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  function onChangeText(key, value) {
    setInput((prev) => ({ ...prev, [key]: value }));
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
        <Text style={{ textAlign: "right", color: "rgba(29,29,29,0.7)" }}>
          Forgot My Password
        </Text>
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
});
