import React, { useContext } from "react";
import Login from "./Login";
import Profile from "./Profile";
import { AuthContext } from "../../contexts/auth";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Account = () => {

  const { loggedIn, user } = useContext(AuthContext);
console.log(loggedIn);
  return (
    loggedIn ? <Profile/> : <Login /> 
  );
};

export default Account;
