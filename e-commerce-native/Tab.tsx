import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screen/Home/Home";
import { Ionicons } from "@expo/vector-icons";
import DetailProduct from "./screen/DetailProduct/DetailProduct";
import Cart from "./screen/Cart/Cart";
import Settings from "./screen/Settings/Settings";

const Tab = createBottomTabNavigator();

const Tabs = function () {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
