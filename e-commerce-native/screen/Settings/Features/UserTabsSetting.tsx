import React, { useState } from "react";
import { Avatar, VStack, HStack, Text, Pressable } from "@gluestack-ui/themed";
import { AvatarImage } from "@gluestack-ui/themed";
import UserDialogue from "../../../components/UserDialogue";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/auth/authSlice";

const UserTabsSetting: React.FC = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const selectUser = useSelector(selectCurrentUser)

  console.log(selectUser)

  const location = "303 Devon St. Seymour, IN 47274";

  const handleShowDialog = (title: string) => {
    setDialogType(title);
    setShowAlertDialog(true);
  };

  return (
    <VStack space="lg">
      <Avatar
        bgColor="$amber600"
        size="lg"
        my="$5"
        alignSelf="center"
        borderRadius="$full"
      >
        <AvatarImage
          alt="userAvatar"
          source={{
            uri: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
          }}
        />
      </Avatar>
      <Pressable onPress={() => handleShowDialog("Username")}>
        <HStack>
          <Text flex={1}>Username</Text>
          <Text>{selectUser?.username || 'Jason'}</Text>
        </HStack>
      </Pressable>
      <Pressable onPress={() => handleShowDialog("Email")}>
        <HStack>
          <Text flex={1}>Email</Text>
          <Text>{selectUser?.email || "this is the"}</Text>
        </HStack>
      </Pressable>
      <Pressable onPress={() => handleShowDialog("Location")}>
        <HStack>
          <Text flex={1}>Location</Text>
          <Text>{selectUser?.location.substring(0, 20) || location}...</Text>
        </HStack>
      </Pressable>

      {showAlertDialog && (
        <UserDialogue
          title={dialogType}
          showAlertDialog={showAlertDialog}
          setShowAlertDialog={setShowAlertDialog}
        />
      )}
    </VStack>
  );
};

export default UserTabsSetting;
