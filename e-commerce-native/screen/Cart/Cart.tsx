import {
  Heading,
  VStack,
  ScrollView,
  CheckboxIndicator,
  ButtonText,
} from "@gluestack-ui/themed";

import { SafeAreaView } from "react-native-safe-area-context";
import CartCard from "./Features/CartCard";
import { CheckIcon, ShoppingCart } from "lucide-react-native";
import CheckOutBar from "./Features/CheckOutBar";
import {
  selectAllCarts,
  selectCartByUserId,
  selectCartIds,
  useGetCartsQuery,
} from "../../redux/reducer/cartsApiSlice";
import { useSelector } from "react-redux";
import { View } from "@gluestack-ui/themed";
import { Spinner } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";

const Cart: React.FC = () => {
  const { isLoading, isError, isSuccess, error } = useGetCartsQuery();
  //FIXME: change the manual uerId 1 dynamic userId
  const selectUserCart = useSelector((state) => selectCartByUserId(state, 1));

  console.log("selectUserCart", selectUserCart);
  let content;
  if (isSuccess) {
    if (!selectUserCart) {
      content = selectUserCart?.products.map((product) => {
        return (
          <CartCard
            price={product.price}
            image={product.thumbnail}
            name={product.title}
            totalQty={product.quantity}
            productId={product.id}
          />
        );
      });
    }
    content = <Text>No Cart Yet! Add Item to cart</Text>;
  } else if (isLoading) {
    content = (
      <View
        height={180}
        width="$full"
        display="flex"
        mx="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="large" />
      </View>
    );
  } else if (isError) {
    content = <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView minHeight="$full" marginStart={10}>
        <Heading>Cart</Heading>
        <VStack marginTop="$2" marginBottom={120} space="sm">
          {content}
        </VStack>
      </ScrollView>
      {!isLoading && <CheckOutBar totalPrice={selectUserCart?.total | 0} />}
    </SafeAreaView>
  );
};

export default Cart;
