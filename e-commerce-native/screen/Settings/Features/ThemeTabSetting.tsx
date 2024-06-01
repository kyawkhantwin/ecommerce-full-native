import React from "react";
import {
  Avatar,
  VStack,
  HStack,
  Text,
  ButtonIcon,
  Heading,
  RadioGroup,
  Radio,
  RadioIcon,
  RadioIndicator,
  Icon,
  CircleIcon
} from "@gluestack-ui/themed";
import { ChevronRight, Sun, Moon } from "lucide-react-native";

const ThemeTabSetting: React.FC = () => {
  return (
    <VStack space="md">
      <Heading>Theme</Heading>
      <RadioGroup>
        <VStack space="xl">
          <HStack space="md">
            <Icon as={Sun} color="$yellow700" size="xl" />
            <Text flex={1}>Light Mode</Text>
            <Radio value="light" size="md" isInvalid={false} isDisabled={false}>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} strokeWidth={1} />
              </RadioIndicator>
            </Radio>
          </HStack>
          <HStack space="md">
            <Icon as={Moon} color="$purple400" size="xl" />
            <Text flex={1}>Dark Mode</Text>
            <Radio value="dark" size="md" isInvalid={false} isDisabled={false}>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} strokeWidth={1} />
              </RadioIndicator>
            </Radio>
          </HStack>
        </VStack>
      </RadioGroup>
    </VStack>
  );
};

export default ThemeTabSetting;
