import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
} from "@gluestack-ui/themed";
import { CreditCard, ShoppingCart } from "lucide-react-native";

const ShopButtonGroup = () => {
  return (
    <ButtonGroup marginTop="$2">
      <Button>
        <ButtonIcon as={CreditCard} marginRight="$2" />
        <ButtonText>Buy Now</ButtonText>
      </Button>
      <Button variant="outline">
        <ButtonIcon as={ShoppingCart} marginRight="$2" />

        <ButtonText>Add To Cart</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ShopButtonGroup;
