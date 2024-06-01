import {
  Fab,
  VStack,
  Button,
  ButtonIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxLabel,
  Text,
  HStack,
  CheckboxIndicator,
  ButtonText,
} from "@gluestack-ui/themed";

import { CheckIcon, ShoppingCart } from "lucide-react-native";

interface CheckOutProps {
  totalPrice: Number;
}
const CheckOutBar: React.FC<CheckOutBarProps> = ({ totalPrice }) => {
  return (
    <Fab
      position="absolute"
      bottom={0}
      right={0}
      p={10}
      rounded={0}
      w="$full"
      bg="$backgroundLight50"
      $dark-bg="$backgroundDark900"
      placement="bottom right"
    >
      <VStack w="$full" space="md">
        <HStack w="$full">
          <Checkbox
            flex={1}
            marginEnd={5}
            aria-label="select all"
            size="md"
            isInvalid={false}
            isDisabled={false}
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Select All</CheckboxLabel>
          </Checkbox>

          <Text>Total Price : {totalPrice}</Text>
        </HStack>

        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonIcon as={ShoppingCart} marginRight="$3" />

          <ButtonText>CheckOut </ButtonText>
        </Button>
      </VStack>
    </Fab>
  );
};

export default CheckOutBar;
