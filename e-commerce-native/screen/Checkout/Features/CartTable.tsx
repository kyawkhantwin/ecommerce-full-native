import React, { useState } from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogCloseButton,
  Icon,
  ButtonText,
  Heading,
  Image,
  Input,
  InputField, // Import Input for user input
} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { AlertDialogBackdrop } from "@gluestack-ui/themed";
import { CircleX } from "lucide-react-native";
import { Alert } from "react-native";


const CartTable: React.FC = () => {
  const cartItems = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0hKk9RZe0ZBCJDZs7RZjpwul8t65Rm_ywg&usqp=CAU",
      name: "Product 1",
      quantity: 2,
      price: 20,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwl8-YUGe6GLpeNut9gPhX03wqphgImzQVT7-SyDsrA&s",
      name: "Product 2",
      quantity: 1,
      price: 15,
    },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <VStack borderWidth={1} padding={10}>
      <HStack>
        <Text flex={1}>Image</Text>
        <Text flex={2}>Name</Text>
        <Text flex={1}>Quantity</Text>
        <Text flex={1}>Price</Text>
        <Text flex={1}>Total Price</Text>
      </HStack>
      {cartItems.map((item, index) => (
        <HStack key={index}>
          <Image alt="product" source={{ uri: item.image }} flex={1} />
          <Text flex={2}>{item.name}</Text>
          <Text flex={1}>{item.quantity}</Text>
          <Text flex={1}>${item.price.toFixed(2)}</Text>
          <Text flex={1}>${(item.price * item.quantity).toFixed(2)}</Text>
        </HStack>
      ))}
      <HStack justifyContent="space-between">
        <Text fontSize="$xl">Total Price:</Text>
        <Text fontSize="$xl">${totalPrice.toFixed(2)}</Text>
      </HStack>
    </VStack>
  );
};

export default CartTable;
