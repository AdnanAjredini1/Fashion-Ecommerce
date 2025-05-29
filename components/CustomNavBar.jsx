import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text } from "@react-navigation/elements";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Animated, { LinearTransition } from "react-native-reanimated";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function CustomNavBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  function getIconByRouteName(routeName, color) {
    switch (routeName) {
      case "Home":
        return <AntDesign name="home" size={18} color={color} />;
      case "Shop":
        return <Entypo name="shop" size={18} color={color} />;
      case "Wishlist":
        return <Fontisto name="heart-alt" size={16} color={color} />;
      case "Profile":
        return <FontAwesome6 name="user" size={16} color={color} />;
      default:
        return <AntDesign name="home" size={18} color={color} />;
    }
  }

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

        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition}
            key={route.key}
            href={buildHref(route.name, route.params)}
            onPress={onPress}
            style={[styles.tabItem, { overflow: "hidden" }]}
          >
            <View
              style={[
                styles.iconContainer,
                isFocused && {
                  backgroundColor: "#EF600D",
                  borderWidth: 0,
                  borderColor: "#EF600D",
                },
              ]}
            >
              {getIconByRouteName(route.name, isFocused ? "white" : "black")}
            </View>

            {isFocused && (
              <Animated.View style={styles.textContainer}>
                <Text style={styles.text}>{label}</Text>
              </Animated.View>
            )}
          </AnimatedTouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    bottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    elevation:5,
    shadowOffset: { height: -2 },
  },
  tabItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 36,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "black",
    width: 32,
    height: 32,
  },
  textContainer: {
    backgroundColor: "#ffede3",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 36,
    marginLeft: -27,
    zIndex: -1,
    height: 32,
  },
  text: {
    borderRadius: 10,
  },
});
