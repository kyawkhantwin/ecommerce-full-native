import React, { useState } from "react";
import {
  ButtonText,
  Heading,
  InputSlot,
  VStack,
  Text,
  HStack,
  LinkText,
  Button,
  InputIcon,
  FormControl,
  View,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@gluestack-ui/themed";
import { useLoginMutation } from "../../redux/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setCredentials } from "../../redux/auth/authSlice";
import { selectCartByUserId } from "@/redux/reducer/cartsApiSlice";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isSuccess, isError, error }] = useLoginMutation();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateTo = () => {
    navigation.navigate("SignUp");
  };

  const loginHandler = async () => {
    try {
      const { user, token } = await login({
        emailOrUsername,
        password,
      }).unwrap();
      dispatch(setCredentials({ user, token }));
      if (isError) {
        console.log(error);
      }
    } catch (error) {
      console.error("Failed to login:", error);
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
            <Heading lineHeight="$md">Login</Heading>
            <VStack space="xs">
              <Text lineHeight="$xs">Email or Username</Text>
              <Input>
                <InputField
                  type="text"
                  value={emailOrUsername}
                  onChangeText={(text) => setEmailOrUsername(text)}
                  placeholder="Email or Username"
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text lineHeight="$xs">Password</Text>
              <Input>
                <InputField
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChangeText={(text) => setPassword(text)}
                  style={{ paddingRight: 40 }}
                  placeholder="Password"
                />
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    height: "100%",
                    justifyContent: "center",
                    paddingRight: 8,
                    zIndex: 12,
                  }}
                >
                  <Pressable
                    onPress={handleShowPassword}
                    style={{ padding: 10 }}
                  >
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </Pressable>
                </View>
              </Input>
            </VStack>
            <Button ml="auto" onPress={loginHandler}>
              <ButtonText color="$white">Login</ButtonText>
            </Button>
          </VStack>
          <Divider my="$5" />
          <HStack>
            <Text>Doesn't Have Account?</Text>
            <Pressable onPress={navigateTo}>
              <LinkText>Register</LinkText>
            </Pressable>
          </HStack>
        </FormControl>
      </View>
    </SafeAreaView>
  );
};

export default Login;
