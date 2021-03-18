import React, { useContext } from "react";
import Login from "./Login";
import Profile from "./Profile";
import AccountRegister from "./Register";
import { AuthContext } from "../../contexts/auth";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Account = () => {

  const { loggedIn } = useContext(AuthContext);
  
  if(loggedIn) {
    return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
              animationEnabled: false,
          }}
      >
          <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    )
  } else {
    return (
      <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
              headerShown: false,
              animationEnabled: false,
          }}
      >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registrar" component={AccountRegister} />
      </Stack.Navigator>
    )
  }
};

export default Account;
