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
      console.log(selectPopularProduct);
      return selectPopularProduct.length !== 0 ? (
        selectPopularProduct.map((item, index) => (
          <ProductCard
            productId={item.id}
            key={index}
            name={item.title}
            price={item.price}
            image={item.images[0]}
          />
        ))
      ) : (
        <Text>No Product Found</Text>
      );
    } else if (isError) {
      //FIXME:Please do this
      // return <Text>Error: {error?.data.message}</Text>;
      return <Text>Error: no connected to db</Text>;
    }
  };

  return (
    <View marginTop={10}>
      <Heading>Popular Products</Heading>

      {isLoading ? (
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
      ) : (
        <ScrollView horizontal={true}>
          <HStack space="md">{renderProducts()}</HStack>
        </ScrollView>
      )}
    </View>
  );
};

export default PopularProducts;
