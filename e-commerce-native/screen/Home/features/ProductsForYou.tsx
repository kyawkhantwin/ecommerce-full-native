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
      return selectAllProduct.map((item, index) => (
        <ProductCard
          productId={item.id}
          key={index}
          name={item.title}
          price={item.price}
          image={item.images[0]}
        />
      ));
    } else if (isError) {
      return <Text>{error}</Text>;
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
