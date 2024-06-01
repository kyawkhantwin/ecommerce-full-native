import React from "react";
import { Card, Image, Text, Pressable } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { View } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

interface ProductCardProps {
  productId: Number;
  name: String;
  image: String;
  price: String;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  name,
  image,
  price,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Detail", { productId })}>
      <Card
        padding={0}
        paddingBottom={30}
        borderRadius="$lg"
        width={150}
        margin="$2"
      >
        <Image
          mb="$2"
          h={100}
          width="$full"
          borderTopLeftRadius="$md"
          borderTopRightRadius="$md"
          alt={name}
          source={{
            uri: image,
          }}
        />

        <View paddingHorizontal="$2">
          <Heading size="sm" height={50} fontFamily="$heading">
            {name.length > 35 ? `${name.substring(0, 35)}...` : name}
          </Heading>
          <Text size="xs" color="$yellow400">
            {price} MMK
          </Text>
        </View>
      </Card>
    </Pressable>
  );
};

export default ProductCard;
