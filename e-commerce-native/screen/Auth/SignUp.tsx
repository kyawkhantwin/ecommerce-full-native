import React, { useState } from "react";
import {
  ButtonText,
  Heading,
  InputSlot,
  VStack,
  HStack,
  Text,
  LinkText,
  View,
  Button,
  InputIcon,
  Pressable,
  FormControl,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@gluestack-ui/themed";
import { useSignUpMutation } from "../../redux/auth/authApiSlice";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const [signUp, { isSuccess, isError, error }] = useSignUpMutation();

  let showPassword = true;

  const handleShowPassword = () => {
    showPassword = !showPassword;
  };

  const navigateTo = () => {
    return navigation.navigate("Login");
  };
  const register = async () => {
    try {
      await signUp({
        email,
        username,
        password,
        location,
      }).unwrap();
      setEmail("");
      setUsername("");
      setPassword("");
      setLocation("");

      if (isSuccess) {
        navigation.navigate("Login");
      } else if (isError) {
        console.log('responser error' , error.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <SafeAreaView>
      <View
        height="$full"
        paddingHorizontal="$8"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl
          w="$full"
          p="$4"
          borderWidth="$1"
          borderRadius="$lg"
          borderColor="$borderLight300"
          $dark-borderWidth="$1"
          $dark-borderRadius="$lg"
          $dark-borderColor="$borderDark800"
        >
          <VStack space="xl">
            <Heading lineHeight="$md">Register</Heading>
            <VStack space="xs">
              <Text lineHeight="$xs">Email</Text>
              <Input>
                <InputField
                  value={email}
                  type="text"
                  onChangeText={(text) => setEmail(text)}
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text lineHeight="$xs">Username</Text>
              <Input>
                <InputField
                  value={username}
                  type="text"
                  onChangeText={(text) => setUsername(text)}
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text lineHeight="$xs">Location</Text>
              <Input>
                <InputField
                  value={location}
                  type="text"
                  onChangeText={(text) => setLocation(text)}
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text lineHeight="$xs">Password</Text>
              <Input>
                <InputField
                  type={showPassword ? "text" : "password"}
                  onChangeText={(text) => setPassword(text)}
                />
                <InputSlot pr="$3" onPress={handleShowPassword}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>
            <Button ml="auto" onPress={register}>
              <ButtonText color="$white">Register</ButtonText>
            </Button>
          </VStack>
          <Divider my="$5" />
          <HStack alignItems="center">
            <Text>Already Have Account?</Text>
            <Pressable onPress={navigateTo}>
              <LinkText>Login</LinkText>
            </Pressable>
          </HStack>
        </FormControl>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
