import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import ListLastCvlis from "./ListLastCvlis";
import ListTypeOfCvlis from "./ListTypeOfCvlis";

const CvliList = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container marginTop={insets.top}>
      <Header title="Crimes Registrados" />
      <ScrollView>
        <ListLastCvlis />
        <ListTypeOfCvlis />
      </ScrollView>
    </Container>
  );
};

export default CvliList;
