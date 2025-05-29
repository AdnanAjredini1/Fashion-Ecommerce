import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginButton({
  btnText,
  onPress,
  isFocused,
  btnStyle,
  textBtnStyle,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isFocused
          ? { backgroundColor: "#ED600E" }
          : { backgroundColor: "white" },
        ,
        btnStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          {
            color: isFocused ? "white" : "black",
            textAlign: "center",
            fontWeight: "700",
            fontSize: 18,
          },
          textBtnStyle,
        ]}
      >
        {btnText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: "white",
  },
});
