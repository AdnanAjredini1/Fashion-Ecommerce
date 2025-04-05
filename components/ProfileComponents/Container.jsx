import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import avatarImg from "../../assets/cropped_image.png";
import Entypo from "@expo/vector-icons/Entypo";
export default function Container() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          source={avatarImg}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View>
          <Text style={{ fontWeight: "700", fontSize: 17 }}>
            Adnan Ajredini
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap:3 }}>
            <Entypo name="location-pin" size={14} color="rgba(29,29,29,0.58)" />
            <Text style={{color:'rgba(29,29,29,0.58)',fontSize:13}}>Kosova ,Prishtina</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Feather name="edit" size={24} color="rgba(29,29,29,0.58)" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 18,
    borderRadius: 18,
    marginTop:20
  },
});
