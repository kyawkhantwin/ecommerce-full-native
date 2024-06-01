import { VStack, HStack, Text, Icon ,Heading} from "@gluestack-ui/themed";
import React from "react";
import { LogOut } from "lucide-react-native";


const LogoutTabSetting: React.FC = () => {
  return (
    <VStack space="md">
      <Heading>Logout</Heading>
      <HStack color="$red500" space="md">
        <Icon as={LogOut} color="$red500" />
        <Text color="$red500">Logout</Text>
      </HStack>
    </VStack>
  );
};

export default LogoutTabSetting;
