import axios from "axios";
import { userActions } from "../store/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authHandler = async (
  input,
  dispatch,
  navigation,
  type = "login"
) => {
  const endpoint =
    type === "register"
      ? "https://fashion-ecommerce-back-dxpf.vercel.app/api/register"
      : "https://fashion-ecommerce-back-dxpf.vercel.app/api/login";

  try {
    const response = await axios.post(endpoint, input, {
      withCredentials: true,
    });
    console.log(`${type} response:`, response.data);

    const { user, token } = response.data;

    if (user && token) {
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user) );

      dispatch(userActions.setUser({ user, token, isAuthenticated: true }));
      navigation.navigate("Home");
    } else {
      console.error(`${type} failed:`, response.data.message);
    }
  } catch (error) {
    console.error(`${type} failed:`, error);
    alert(`${type} error:`, error.message);
  }
};
