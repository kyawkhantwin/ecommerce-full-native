import React from "react";
import { Heading, View, Text, Spinner } from "@gluestack-ui/themed";
import ProductCard from "../../../components/ProductCard";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  useGetProductsQuery,
} from "../../../redux/reducer/productsApiSlice";

const ProductsForYou: React.FC = () => {
  const { isSuccess, isError, isLoading, error } = useGetProductsQuery();
  const selectAllProduct = useSelector(selectAllProducts);

  const renderProducts = () => {
    if (isSuccess) {
      console.log(selectAllProduct);
      return selectAllProduct.length !== 0 ? (
        selectAllProduct.map((item, index) => (
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
    } else if (isLoading) {
      return (
        <View
          height={180}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Spinner size="large" />
        </View>
      );
    }
  };

  return (
    <View>
      <Heading marginTop={10}>Products For You </Heading>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {renderProducts()}
      </View>
    </View>
  );
};

export default ProductsForYou;
