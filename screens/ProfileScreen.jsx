import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../components/ProfileComponents/ProfileHeader";
import Container from "../components/ProfileComponents/Container";
import ItemContainer from "../components/ProfileComponents/ItemContainer";
import Item from "../components/ProfileComponents/Item";
import { data, data2 } from "../assets/profileItemsData";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:100}} >
        <Container />
        <Text style={styles.subtitle}>Settings</Text>
        <ItemContainer>
          {data.map((item) => (
            <Item key={item.title} title={item.title} icon={item.icon} />
          ))}
        </ItemContainer>
        <Text style={styles.subtitle}>Support</Text>
        <ItemContainer>
          {data2.map((item) => (
            <Item key={item.title} title={item.title} icon={item.icon} />
          ))}
        </ItemContainer>
       <View style={{marginBottom:50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 500,
    marginTop:25,
    marginBottom:15
  },
});
