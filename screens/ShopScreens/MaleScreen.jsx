import { View } from "react-native";
import ProductsWrapper from "../../components/ShopComponents/ProductsWrapper";
import { mensFashion } from "../../assets/man-fashion-Data";
import useProductsByCategory from "../../Hooks/useProductsByCategory";

export default function MaleScreen() {
  const { data } = useProductsByCategory("men");
 

  return (
    <View>
      <ProductsWrapper data={data ?? mensFashion} />
    </View>
  );
}
