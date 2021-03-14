import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";

const CvliDetails = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container marginTop={insets.top}>
      <Header title="Detalhe" />
    </Container>
  );
};

export default CvliDetails;
