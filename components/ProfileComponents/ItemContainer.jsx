import { View, StyleSheet } from "react-native";

export default function ItemContainer({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingVertical: 18,
    borderRadius: 18,
    gap:30
  },
});
