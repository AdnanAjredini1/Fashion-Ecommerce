import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage";
import ShopScreen from "./screens/ShopScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CustomNavBar from "./components/CustomNavBar";
import ProductScreen from "./screens/ProductScreen";
import { Provider } from "react-redux";
import store from "./store/store";
import BagScreen from "./screens/BagScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileItemScreen from "./screens/ProfileItemScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tabs.Navigator
      tabBar={(props) => <CustomNavBar {...props} />}
      screenOptions={{
        contentStyle: { backgroundColor: "#F1F1F3" },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        component={FavoritesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        // component={ProfileScreen}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "#f1f1f3" },
          }}
        >
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{
              headerShown: false,
              contentStyle: { backgroundColor: "#f1f1f3" },
            }}
          />
          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BagScreen"
            component={BagScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProfileItemScreen"
            component={ProfileItemScreen}
            headerShown={false}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
