import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={"rgba(29,29,29,1)"}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={placeholder.toLowerCase().includes("password")}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "rgba(29,29,29,0.4)",
    padding: 10,
    borderRadius: 10,
  },
});
