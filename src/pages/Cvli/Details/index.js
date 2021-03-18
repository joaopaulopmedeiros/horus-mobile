import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";

const CvliDetails = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { cvli } = route.params;
  const [date, time] = cvli.created_at.split('T');
  
  const formatedDate = date.split('-').reverse().join('/');
  const formatedTime = time.split('.0')[0];

  useEffect(() => {
    return () => {
      navigation.navigate('Crimes', { screen: 'List'})
    }
  },[]);

  return (
    <Container marginTop={insets.top}>
      <Header title="Crimes Registrados" />
      <ScrollView style={{ paddingLeft: '8%', paddingTop: '2%', width: '100%' }}>
        <View>
          <Text
            style={{
              textTransform: "uppercase",
              color: "rgba(20,119,248,0.8)",
              fontFamily: "Montserrat_700Bold",
              paddingTop: 20,
              paddingBottom: 16,
            }}
          >
            {cvli.title}
          </Text>
          <Text style={{
            color: "#485058",
            fontFamily: "Montserrat_700Bold",
          }}> 
            Data: {formatedDate}
          </Text>
          <Text style={{
            color: "#485058",
            fontFamily: "Montserrat_700Bold",
          }}>
            Horário: {formatedTime}
          </Text>
          <Text style={{
            textTransform: "uppercase",
            color: "rgba(20,119,248,0.8)",
            fontFamily: "Montserrat_700Bold",
            paddingTop: '8%'
          }}
          >
            Descrição
          </Text>
          <Text style={{
            color: "#77838F",
            width: '80%',
            fontFamily: 'Montserrat_400Regular'
          }}>
            {cvli.description}
          </Text>
          <Text style={{
            textTransform: "uppercase",
            color: "rgba(20,119,248,0.8)",
            fontFamily: "Montserrat_700Bold",
            paddingTop: '8%'
          }}
          >
            Imagens e vídeos
          </Text>
          {cvli.files
            ?
            cvli.files.map(file =>
              <Text>
                <Image source={file} />
              </Text>)
            :
            <Text style={{
            color: "#77838F",
            width: '80%',
            fontFamily: "Montserrat_700Bold",
          }}>
              Não há anexos de imagens, vídeos, boletins e noticías.
            </Text>
          }
        </View>
      </ScrollView>
    </Container>
  );
};

export default CvliDetails;
