import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

import Home from "./pages/Home/index";
import Cvli from "./pages/Cvli/index";
import CvliRegister from "./pages/Cvli/Register/index";
import Account from "./pages/Account/index";

const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#0F4C75",
            inactiveTintColor: "#89969F",
            keyboardHidesTabBar: true
          }}
        >
          <Tab.Screen
            name="Início"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Crimes"
            component={Cvli}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="alarm-light-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Registrar"
            component={CvliRegister}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="notebook" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Conta"
            component={Account}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
