import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tab";
import { useState } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DetailProduct from "./screen/DetailProduct/DetailProduct";
import Checkout from "./screen/Checkout/Checkout";
import Order from "./screen/Order/Order";
import Login from "./screen/Auth/Login";
import SignUp from "./screen/Auth/SignUp";

const Stack = createNativeStackNavigator();
export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GluestackUIProvider config={config} colorMode={theme}>
          <NavigationContainer
            theme={theme === "light" ? DefaultTheme : DarkTheme}
          >
            <Stack.Navigator
              initialRouteName="SignUp"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Tabs" component={Tabs} />
              <Stack.Screen name="Detail" component={DetailProduct} />
              <Stack.Screen name="Checkout" component={Checkout} />
              <Stack.Screen name="Order" component={Order} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
