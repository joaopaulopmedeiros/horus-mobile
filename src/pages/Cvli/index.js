import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Container } from "../../components/Container";
import ListLast from "./ListLast";

const Cvli = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container marginTop={insets.top}>
      <Header title="Crimes Registrados" />
      <ListLast />
    </Container>
  );
};

export default Cvli;
