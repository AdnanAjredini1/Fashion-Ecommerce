import { StyleSheet, Animated } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "../components/HeaderBack";
import Header from "../components/Header";

export default function SearchScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const headerTranslate = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  const handleScroll = (event) => {
      const currentOffset = event.nativeEvent.contentOffset.y;
  
      if (currentOffset > previousScrollY && currentOffset > 50) {
        // Scroll Down
        Animated.timing(headerTranslate, {
          toValue: -100,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else if (currentOffset < previousScrollY) {
        // Scroll Up
        Animated.timing(headerTranslate, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
  
      setPreviousScrollY(currentOffset);
    };
  

  return (
    <SafeAreaView style={styles.container}>
      <Header mainPage={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
  },
});
