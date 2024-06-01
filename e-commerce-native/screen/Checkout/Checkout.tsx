import React from "react";
import {
  VStack,

  Heading,
} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import CartTable from "./Features/CartTable";
import Location from "./Features/Location";
import Payment from "./Features/Payment";




const Checkout: React.FC = () => {
  return (
    <SafeAreaView>
      <VStack space="lg">
        <Heading size="lg">Order Summary</Heading>
        <CartTable/>
        <Location/>
        <Payment/>
      </VStack>
    </SafeAreaView>
  );
};

export default Checkout;
