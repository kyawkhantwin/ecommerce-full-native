import {
  Button,
  ButtonText,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  Heading,
  AlertDialogCloseButton,
  Icon,
  CloseIcon,
  InputField,
  Input,
  AlertDialog,
} from "@gluestack-ui/themed";
import { FC, useState } from "react";

interface UserDialogueProps {
  title: String;
  setShowAlertDialog: Boolean;
  showAlertDialog: any;
}
const UserDialogue: FC<UserDialogueProps> = ({
  title,
  setShowAlertDialog,
  showAlertDialog,
}) => {
  return (
    <AlertDialog
      isOpen={true}
      onClose={() => {
        setShowAlertDialog(false);
      }}
    >
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">Change {title}</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder={`Change ${title}`} />
          </Input>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            variant="outline"
            action="secondary"
            marginRight="$3"
            onPress={() => {
              setShowAlertDialog(false);
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            action="positive"
            onPress={() => {
              setShowAlertDialog(false);
            }}
          >
            <ButtonText>Change {title}</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserDialogue;
