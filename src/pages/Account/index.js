import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Container } from "../../components/Container";
import Login from "./Login";
import { AuthContext } from "../../contexts/auth";
import { Text } from "react-native"

const Account = () => {
  const insets = useSafeAreaInsets();
  
  const { loggedIn, user } = useContext(AuthContext);

  return (
    <Container marginTop={insets.top}>
      <Header title="Conta" />
      <Login />
    </Container>
  );
};

export default Account;
