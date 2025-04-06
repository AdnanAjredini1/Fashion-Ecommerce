import {
  Animated,
  View,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";

export default function CustomTopTabs({
  state,
  descriptors,
  navigation,
  position,
}) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            href={buildHref(route.name, route.params)}
            accessibilityRole={Platform.OS === "web" ? "link" : "button"}
            onPress={onPress}
            style={[
              styles.tab,
              isFocused
                ? { backgroundColor: "#ED600E" }
                : { backgroundColor: "#F1F1F3" },
            ]}
            key={route.name}
          >
            <Animated.Text
              style={{
                color: isFocused ? "white" : "black",
                textAlign: "center",
              }}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#ED600E",
    marginTop: 15,
    borderRadius: 25,
    padding: 3,
  },
  tab: {
    flex: 1,
    borderRadius: 22,
    paddingVertical: 10,
  },
});
