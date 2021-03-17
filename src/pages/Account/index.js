import React, { useContext } from "react";
import Login from "./Login";
import { AuthContext } from "../../contexts/auth";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Account = () => {

  const { loggedIn, user } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="jsj" component={Login} />
    </Stack.Navigator>
  );
};

export default Account;
