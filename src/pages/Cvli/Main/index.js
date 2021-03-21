import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import ListLastCvlis from "./ListLastCvlis";
import ListTypeOfCvlis from "./ListTypeOfCvlis";

const CvliMain = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <Container marginTop={insets.top}>
      <Header title="Crimes Registrados" />
      <ScrollView>
        <ListLastCvlis navigation={navigation} />
        <ListTypeOfCvlis navigation={navigation} />
      </ScrollView>
    </Container>
  );
};

export default CvliMain;
