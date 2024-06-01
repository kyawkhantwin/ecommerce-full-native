import { SafeAreaView } from "react-native-safe-area-context";
import Category from "./features/Category";
import PopularProducts from "./features/PopularItems";
import ProductsForYou from "./features/ProductsForYou";
import { ScrollView } from "@gluestack-ui/themed";
import React from "react";

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{ marginStart: 10 }}>
      <ScrollView>
        <Category />
        <PopularProducts  />
        <ProductsForYou  />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
