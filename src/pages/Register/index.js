import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Container } from "../../components/Container";

const Register = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container marginTop={insets.top}>
      <Header title="Registrar Crimes" />
    </Container>
  );
};

export default Register;
