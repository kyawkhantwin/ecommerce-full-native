import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCloseButton,
  Button,
  ButtonText,
  Icon,
  Heading,
  Text,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { CircleX } from "lucide-react-native";
import { Alert } from "react-native";

interface LocationDialogProps {
  setLocationDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  locationDialogOpen: boolean;
}

const LocationDialog: React.FC<LocationDialogProps> = ({
  setLocationDialogOpen,
  setLocation,
  locationDialogOpen,
}) => {
  const [newLocation, setNewLocation] = useState("");

  const handleCancelLocationChange = () => {
    setNewLocation("");
    setLocationDialogOpen(false);
  };

  const handleLocationChange = () => {
    if (newLocation === "") {
      Alert.alert("Error", "Please enter a valid location");
      return; 
    }

    setLocation(newLocation);
    setLocationDialogOpen(false);
  };

  return (
    <AlertDialog
      isOpen={locationDialogOpen}
      onClose={handleCancelLocationChange}
    >
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading>Change Location</Heading>
          <AlertDialogCloseButton>
            <Icon as={CircleX} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text>Please enter your new location:</Text>
          <Input variant="outline" size="md">
            <InputField
              value={newLocation}
              onChangeText={(text) => setNewLocation(text)}
              placeholder="Enter new location"
            />
          </Input>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onPress={handleCancelLocationChange}>
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button onPress={handleLocationChange}>
            <ButtonText>Confirm</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LocationDialog;
