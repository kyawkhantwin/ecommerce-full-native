import React from "react";
import {
  VStack,
  HStack,
  
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";
import OrderCard from "./Feature/OrderCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Order = () => {
  const orders = [
    {
      id: 1,
      date: "2024-05-10",
      items: [
        {
          id: 1,
          name: "Product 1",
          quantity: 2,
          price: 20,
          image:
            "https://img.freepik.com/premium-photo/beautiful-anime-waifu-style-girl-ai-generated_731790-17261.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          quantity: 1,
          price: 15,
          image:
            "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/299990628_372920445039780_8513506812821757310_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oCKEpMS5hvAQ7kNvgFmkglc&_nc_ht=scontent-sin6-1.xx&oh=00_AYD4fd8JHfFPVpiMxLKZ5zNPqtYeZ3dg7YY5eWgZPX7e6g&oe=66477E1E",
        },
      ],
      total: 55,
    },
    {
      id: 2,
      date: "2024-05-10",
      items: [
        {
          id: 3,
          name: "Product 3",
          quantity: 2,
          price: 25,
          image:
            "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/299990628_372920445039780_8513506812821757310_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oCKEpMS5hvAQ7kNvgFmkglc&_nc_ht=scontent-sin6-1.xx&oh=00_AYD4fd8JHfFPVpiMxLKZ5zNPqtYeZ3dg7YY5eWgZPX7e6g&oe=66477E1E",
        },
        {
          id: 4,
          name: "Product 4",
          quantity: 1,
          price: 30,
          image:
            "https://img.freepik.com/premium-photo/beautiful-anime-waifu-style-girl-ai-generated_731790-17261.jpg",
        },
      ],
      total: 85,
    },
    {
        id: 3,
        date: "2024-05-10",
        items: [
          {
            id: 3,
            name: "Product 3",
            quantity: 2,
            price: 25,
            image:
              "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/299990628_372920445039780_8513506812821757310_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oCKEpMS5hvAQ7kNvgFmkglc&_nc_ht=scontent-sin6-1.xx&oh=00_AYD4fd8JHfFPVpiMxLKZ5zNPqtYeZ3dg7YY5eWgZPX7e6g&oe=66477E1E",
          },
          {
            id: 4,
            name: "Product 4",
            quantity: 1,
            price: 30,
            image:
              "https://img.freepik.com/premium-photo/beautiful-anime-waifu-style-girl-ai-generated_731790-17261.jpg",
          },
        ],
        total: 85,
      },{
        id: 3,
        date: "2024-05-10",
        items: [
          {
            id: 4,
            name: "Product 3",
            quantity: 2,
            price: 25,
            image:
              "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/299990628_372920445039780_8513506812821757310_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oCKEpMS5hvAQ7kNvgFmkglc&_nc_ht=scontent-sin6-1.xx&oh=00_AYD4fd8JHfFPVpiMxLKZ5zNPqtYeZ3dg7YY5eWgZPX7e6g&oe=66477E1E",
          },
          {
            id: 4,
            name: "Product 4",
            quantity: 1,
            price: 30,
            image:
              "https://img.freepik.com/premium-photo/beautiful-anime-waifu-style-girl-ai-generated_731790-17261.jpg",
          },
        ],
        total: 85,
      },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <VStack padding={20} space="lg">
          {/* Pending Orders */}
          <Heading size="lg">Pending Orders</Heading>
          <HStack flexWrap="wrap" space="lg">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </HStack>
          {/* Previous Orders */}
          <Heading size="lg">Previous Orders</Heading>
          <HStack flexWrap="wrap" space="lg">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
