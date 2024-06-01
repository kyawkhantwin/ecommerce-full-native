import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack, ScrollView } from "@gluestack-ui/themed";
import FeedBackTabSetting from "./Features/FeedBackTabSetting";
import LogoutTabSetting from "./Features/LogoutTabSetting";
import OrdersTabSetting from "./Features/OrdersTabSetting";
import UserTabsSetting from "./Features/UserTabsSetting";
import ThemeTabSetting from "./Features/ThemeTabSetting";

const Settings: React.FC = () => {
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <ScrollView>
        <VStack width="$full" space="4xl">
          <UserTabsSetting />
          <OrdersTabSetting />
          <ThemeTabSetting />
          <LogoutTabSetting />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
