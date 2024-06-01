import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonIcon, HStack, Heading, VStack, Card, Text } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";


const OrdersTabSetting: React.FC = () => {
  return (
    <VStack space="md">
      <HStack>
        <Heading flex={1}>Orders </Heading>
        <ButtonIcon alignSelf="center" size="xl" as={ChevronRight} />
      </HStack>
      <HStack
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        space="lg"
        width="$full"
      >
        {/* Loop orders */}
        <Card
          width={160}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            <Text>19/2/2024</Text>
            <Text size="lg" color="$yellow400">
              1990 MMK
            </Text>
          </VStack>
        </Card>
        <Card
          width={160}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            <Text>19/2/2024</Text>
            <Text size="lg" color="$yellow400">
              1990111 MMK
            </Text>
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
};

export default OrdersTabSetting;
