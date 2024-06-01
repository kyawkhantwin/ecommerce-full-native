import { ButtonIcon, HStack, Pressable } from "@gluestack-ui/themed";
import { Card, VStack } from "@gluestack-ui/themed";
import { Button, Text, Image, Heading } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Trash } from "lucide-react-native";
import React from "react";

interface CartCardProps {
  productId: Number;
  image: String;
  name: Number;
  totalQty: Number;
  price: Number;
}
const CartCard: React.FC<CartCardProps> = ({
  image,
  name,
  totalQty,
  price,
  productId,
}) => {
  const navigation = useNavigation();
  return (
    //FIXME: remove disabled
    <Pressable disabled={true} onPress={() => navigation.navigate("Detail", {productId})}>
      <Card size="md" variant="elevated" m="$1" p={0} paddingEnd="$2">
        <HStack space="md">
          <Image
            alt="cart"
            borderTopLeftRadius="$lg"
            borderBottomLeftRadius="$lg"
            h="$24"
            source={{
              uri: image,
            }}
          />
          <VStack space="sm" flex={1} alignSelf="center">
            <Heading size="sm">{name}</Heading>
            <Text size="sm" color="$yellow400">
              {price} MMK
            </Text>
            <Text size="sm">{totalQty} QTY</Text>
          </VStack>
          <Button
            onPress={() => {
              return alert("hi");
            }}
            variant="link"
            alignSelf="center"
          >
            <ButtonIcon
              size="xl"
              alignSelf="center"
              color="$red500"
              as={Trash}
            />
          </Button>
        </HStack>
      </Card>
    </Pressable>
  );
};

export default CartCard;
