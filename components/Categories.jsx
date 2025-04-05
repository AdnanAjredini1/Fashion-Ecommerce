import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Categories = ({
  data,
  categoryText,
  seeAllText,
  categoryTextStyle,
  seeAllTextStyle,
  onPressSeeAll,
  renderItem,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <Text style={categoryTextStyle}>{categoryText}</Text>
        <TouchableOpacity onPress={onPressSeeAll}>
          <Text style={seeAllTextStyle}>{seeAllText}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    marginTop: 10,
  },
  textsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
