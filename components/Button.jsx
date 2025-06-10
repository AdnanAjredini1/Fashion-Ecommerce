import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({
  btnText,
  buttonStyles,
  btnTextStyles,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyles]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, btnTextStyles]}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EF600E",
    borderRadius: 25,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#EF600E",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});
