import React from "react";
import { Button, Text } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
interface ButtonIconProps {
  icon: String;
  text: String;
  iconColor: String;
}
const ButtonIconComponent: React.FC<ButtonIconProps> = ({
  icon,
  text,
  iconColor
}) => {
  return (
    <Button variant="link" display="flex" flexDirection="column" marginRight={30}>
      <Ionicons name={icon} height="100%" size={40} color={iconColor} />
      <Text mt="$2" textTransform="capitalize">
        {text}
      </Text>
    </Button>
  );
};

export default ButtonIconComponent;
