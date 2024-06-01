import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, ScrollView, Image, Spinner } from "@gluestack-ui/themed";
import ProductDetail from "./Features/ProductDetail";
import ProductReview from "./Features/ProductReview";
import { useRoute } from "@react-navigation/native";
import {
  selectProductById,
  useGetProductsQuery,
} from "../../redux/reducer/productsApiSlice";
import { Text } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";

const DetailProduct = () => {
  const route = useRoute();
  const { productId } = route.params;
  const { isLoading, isError, isSuccess, error } = useGetProductsQuery();
  const selectPopularProduct = useSelector((state) =>
    selectProductById(state, productId)
  );

  const { images, title, price, description } = selectPopularProduct;

  if (isLoading) {
    return <Spinner size="medium" />;
  } else if (isError) {
    return <Text>{error.message}</Text>;
  }
  return (
    <SafeAreaView>
      <ScrollView h="$full">
        <Image
          width="100%"
          height="$64"
          alt="Detail"
          size="lg"
          source={{
            uri: images[0],
          }}
        />
        <VStack space="md" marginBottom="$7">
          <ProductDetail name={title} price={price} description={description} />
          <ProductReview />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailProduct;
