import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Container } from "../../components/Container";

const Cvli = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container marginTop={insets.top}>
      <Header title="Crimes Registrados" />
    </Container>
  );
};

export default Cvli;
