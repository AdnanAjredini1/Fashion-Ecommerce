import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaleScreen from "./ShopScreens/MaleScreen";
import CustomTopTabs from "../components/ShopComponents/CustomTopTabs";
import Header from "../components/Header";
import FemaleScreen from "./ShopScreens/FemaleScreen";
import Everything from "./ShopScreens/Everything";

const TopTabs = createMaterialTopTabNavigator();

export default function ShopScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header mainPage={true} />
      
      <TopTabs.Navigator tabBar={(props) => <CustomTopTabs {...props} />}>
        <TopTabs.Screen
          name="Male Screen"
          component={MaleScreen}
          options={{
            title: "Men",
          }}
        />
        <TopTabs.Screen
          name="Female Screen"
          component={FemaleScreen}
          options={{
            title: "Women",
          }}
        />
        <TopTabs.Screen
          name="Everything Screen"
          component={Everything}
          options={{
            title: "Everything",
          }}
        />
      </TopTabs.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    flex: 1,
  },
 
});
