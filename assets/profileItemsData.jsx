import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from '@expo/vector-icons/Feather';

export const data = [
  {
    title: "Shop Menswear",
    icon: <Entypo name="shop" size={24} color="rgba(29,29,29,0.58)" />,
  },
  {
    title: "Notification",
    icon: (
      <Ionicons
        name="notifications-outline"
        size={25}
        color="rgba(29,29,29,0.58)"
      />
    ),
  },
  {
    title: "Location",
    icon: <EvilIcons name="location" size={26} color="rgba(29,29,29,0.58)" />,
  },
  {
    title: "Country/Region",
    icon: (
      <MaterialCommunityIcons
        name="map-search-outline"
        size={24}
        color="rgba(29,29,29,0.58)"
      />
    ),
  },
];

export const data2 = [
  {
    title: "Contact Us",
    icon: <AntDesign name="contacts" size={24} color="rgba(29,29,29,0.58)" />,
  },
  {
    title: "Help and Information",
    icon: (
      <MaterialCommunityIcons
        name="message-question-outline"
        size={24}
        color="rgba(29,29,29,0.58)"
      />
    ),
  },
  {
    title: "Privacy Policy",
    icon: (
      <MaterialCommunityIcons
        name="police-badge-outline"
        size={24}
        color="rgba(29,29,29,0.58)"
      />
    ),
  },
  {
    title: "Terms & Conditions",
    icon: (
      <Feather name="arrow-right-circle" size={25} color="rgba(29,29,29,0.58)" />
    ),
  },
];
