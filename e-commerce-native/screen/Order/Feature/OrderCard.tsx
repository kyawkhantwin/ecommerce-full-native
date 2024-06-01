import React from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  Image,
  Heading,
  ButtonText,
} from "@gluestack-ui/themed";
import { Card } from "@gluestack-ui/themed";

interface Order {
  id: number;
  date: string;
  items: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  total: number;
}

interface OrderCardProps {
  order: Order;
}
const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <Card key={order.id}>
      <VStack padding={10} space="md">
        <Text>Date: {order.date}</Text>
        {order.items.map((item) => (
          <HStack key={item.id} alignItems="center" space="md">
            <Image source={{ uri: item.image }} width={50} height={50} />
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price}</Text>
          </HStack>
        ))}
        <Divider />
        <HStack justifyContent="space-between">
          <Text fontSize="$lg">Total:</Text>
          <Text fontSize="$lg">${order.total}</Text>
        </HStack>
        <Button variant="outline">
          <ButtonText> Reorder</ButtonText>
        </Button>
      </VStack>
    </Card>
  );
};

export default OrderCard;
