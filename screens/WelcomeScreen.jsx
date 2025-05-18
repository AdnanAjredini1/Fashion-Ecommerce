import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Tabs");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(237, 96, 14, 1)", "rgba(253, 187, 45, 1)"]}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{ flex: 1 }}
      >
        <Text style={styles.text}>Welcome</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 44,
    color: "white",
    top: "25%",
    textAlign: "center",
    fontWeight: "bold",
  },
});
