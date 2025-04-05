import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Category({ category, image, onPressCategory }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPressCategory}
    >
      <View style={styles.imageContainer}>
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderRadius: 30 }}
        />
      </View>
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 3,
    marginRight: 8,
    borderRadius: 30,
    gap: 8,
  },
  imageContainer: {
    width: 35,
    height: 35,
  },
  text: {
    fontWeight: "500",
    paddingRight: 10,
  },
});
