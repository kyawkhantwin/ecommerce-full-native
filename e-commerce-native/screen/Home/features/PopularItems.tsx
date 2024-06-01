import React from "react";
import {
  HStack,
  Heading,
  ScrollView,
  Spinner,
  Text,
  View,
} from "@gluestack-ui/themed";
import ProductCard from "../../../components/ProductCard";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  useGetProductsQuery,
} from "../../../redux/reducer/productsApiSlice";

const PopularProducts: React.FC = () => {
  const { isLoading, isError, isSuccess, error } = useGetProductsQuery();

  const selectPopularProduct = useSelector(selectAllProducts);

  const renderProducts = () => {
    if (isSuccess) {
      return selectPopularProduct.reverse().map((item, index) => {
        return (
          <ProductCard
            productId={item.id}
            key={index}
            name={item.title}
            price={item.price}
            image={item.images[0]}
          />
        );
      });
    } else if (isLoading) {
      return (
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
      return <Text>Error: {error}</Text>;
    }
  };

  return (
    <View marginTop={10}>
      <Heading>Popular Products</Heading>
      <ScrollView horizontal={true}>
        <HStack space="md">{renderProducts()}</HStack>
      </ScrollView>
    </View>
  );
};

export default PopularProducts;
