import React from "react";
import { Text, Heading, VStack, View, HStack, Icon } from "@gluestack-ui/themed";
import { Truck } from "lucide-react-native";
import ShopButtonGroup from "./ShopButtonGroup";

interface ProductDetailProps {
  name: string;
  price: string;
  description: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ name, price, description }) => {
  return (
    <View>
      <VStack space="md" marginTop="$3">
        <VStack space="md">
          <Heading>{name}</Heading>
          <Text color="$yellow400">{price} MMK</Text>
          <Text>{description}</Text>
          <HStack space="xs">
            <Icon size="xl" marginBottom={0} as={Truck} />
            <Text>1000 MMK</Text>
          </HStack>
          <ShopButtonGroup />
        </VStack>
      </VStack>
    </View>
  );
};

export default ProductDetail;
