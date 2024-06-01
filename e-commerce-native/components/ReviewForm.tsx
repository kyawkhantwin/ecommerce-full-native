import {
  ButtonIcon,
  FormControlLabel,
  TextareaInput,
} from "@gluestack-ui/themed";
import { FormControlError } from "@gluestack-ui/themed";
import { FormControlErrorText } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { Textarea } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { FormControlErrorIcon } from "@gluestack-ui/themed";
import {
  View,
  FormControl,
  FormControlLabelText,
  Icon,
} from "@gluestack-ui/themed";
import { AlertCircleIcon, Send, Star } from "lucide-react-native";
import React from "react";

const ReviewForm = () => {
  return (
    <View>
      <FormControl
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel mb="$1">
          <FormControlLabelText>Write Review</FormControlLabelText>
        </FormControlLabel>
        <HStack space="xs" marginVertical={5}>
          <Icon as={Star} />
          <Icon as={Star} />
          <Icon as={Star} />
          <Icon as={Star} />
          <Icon as={Star} />
        </HStack>
        <Textarea
          size="md"
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          w="$full"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          paddingHorizontal={20}
        >
          <TextareaInput m={0} p={0} placeholder="Your text goes here..." />
          <ButtonIcon
            as={Send}
            size="xl"
            color="$cyan500"
            $hover-color="$green900"
            $pressed-color="$red300"
          />
        </Textarea>

        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            At least 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    </View>
  );
};

export default ReviewForm;
