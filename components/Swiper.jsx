import { View, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselButton from "./CarouselButton";

const COLORS = ["#f38c51", "#EF600D", "#b44504"];
const { width } = Dimensions.get("window");

const renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        backgroundColor: item,
        width: width - 100,
        height: 180,
        alignSelf: "center",
        borderRadius: 20,
      }}
    >
      <CarouselButton btnStyles={styles.btnStyles} />
    </View>
  );
};

export default function Swiper() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <View style={styles.container}>
      <Carousel
        data={COLORS}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 100}
        inactiveSlideOpacity={0.5}
        firstItem={1}
        onSnapToItem={(index) => setActiveSlide(index)}
        activeSlideAlignment="center"
        // activeAnimationType="spring"
      />
      <Pagination
        dotsLength={COLORS.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 10 }}
        dotStyle={{
          width: 25,
          height: 8,
          borderRadius: 5,
          backgroundColor: "#EF600D",
        }}
        inactiveDotStyle={{
          width: 10,
          backgroundColor: "gray",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  btnStyles: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
});
