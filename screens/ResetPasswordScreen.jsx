import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/LoginComponents.jsx/Input";
import Button from "../components/Button";

export default function ResetPasswordScreen() {
  return (
    <View style={{ marginHorizontal: "5%" }}>
      <View style={styles.container}>
        <Input placeholder={"Current Password"} />
        <Input placeholder={"New Password"} />
        <Button btnText="reset"  btnTextStyles={{color:'white',fontSize:16}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    gap: 15,
    borderRadius: 12,
    marginTop: 30,
    padding: 20,
    elevation: 5,
    paddingBottom: 20,
    width: "100%",
   
  },
});
