import React, { useState, useContext, useEffect, useCallback } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { AuthContext } from "../../../contexts/auth";
import { useFocusEffect } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import ListTypeOfCvlis from '../Main/ListTypeOfCvlis';
import { TextInputMask } from 'react-native-masked-text';

const CvliRegister = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const { loggedIn } = useContext(AuthContext);

  const [agreed, setAgreed] = useState(false);
  const [statusOfReportedPerson, setStatusOfReportedPerson] = useState(false);
  const [occuredNow, setOccuredNow] = useState(true);
  const [typeOfCvli, setTypeOfCvli] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  function handleNavigationToAccountLogin() {
    navigation.navigate('Conta', { screen: 'Login', initial: false });
  }

  useEffect(() => {
    console.log(typeOfCvli);
  }, [typeOfCvli]);

  function emitAlert() {
    Alert.alert(
      "Aviso",
      "Para cadastrar um crime, faça login.",
      [
        { text: "OK", onPress: () => handleNavigationToAccountLogin() }
      ],
      { cancelable: false }
    );
  }

  useFocusEffect(
    useCallback(() => {
      if (!loggedIn) emitAlert();
    }, [loggedIn])
  );

  return (
    <Container marginTop={insets.top}>
      <Header title="Registrar" />
      <ScrollView>
        <View style={{ ...styles.wrapper, ...styles.extraSpacing }}>
          <Text style={styles.title}>Atenção</Text>
          <Text style={{ marginTop: 8, textAlign: 'justify', color: '#77838F' }}>
            Lembre-se que ao registrar um crime falso você está sujeito a banimento da plataforma e a processos civis.
          </Text>
          <Text style={{ color: '#77838F', marginTop: 14, marginBottom: 8 }}>
            <Text>Alguma dúvida? Confira nossos </Text>
            <Text style={{ color: "rgba(20,119,248,0.8)" }}>termos</Text>
          </Text>
          <RadioButton.Group onValueChange={newValue => setAgreed(newValue)} value={agreed}>
            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -8, }}>
              <RadioButton color="rgba(20,119,248,1)" value={true} />
              <Text style={{ color: '#77838F' }}>
                Concordo com os termos.
              </Text>
            </View>
          </RadioButton.Group>
          <Text style={{ ...styles.title, marginTop: 16 }}>Registrar Crime</Text>
          <View  style={{ marginLeft: -30 }}>
            <ListTypeOfCvlis setTypeOfCvli={setTypeOfCvli} />
          </View>
          <RadioButton.Group onValueChange={newValue => setStatusOfReportedPerson(newValue)} value={statusOfReportedPerson}>
            <View style={{ marginLeft: -8 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton color="rgba(20,119,248,1)" value={1} />
                <Text style={{ color: '#77838F' }}>
                  Presenciei um crime
              </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton color="rgba(20,119,248,1)" value={2} />
                <Text style={{ color: '#77838F' }}>
                  Fui vítima
              </Text>
              </View>
            </View>
          </RadioButton.Group>
          <Text style={{
            color: "rgba(20,119,248,0.8)",
            fontFamily: "Montserrat_700Bold",
            marginTop: 16
          }}>O crime ocorreu agora?</Text>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <TouchableOpacity style={occuredNow == true ? { ...styles.btn, backgroundColor: "rgba(20,119,248,0.8)", borderWidth: 0, marginRight: 8 } : { ...styles.btn, marginRight: 8 }} onPress={() => setOccuredNow(true)}>
              <Text style={occuredNow ? { color: 'white', textAlign: 'center' } : { color: 'black', textAlign: 'center' }}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={occuredNow == false ? { ...styles.btn, backgroundColor: "rgba(20,119,248,0.8)", borderWidth: 0, marginRight: 8 } : styles.btn} onPress={() => setOccuredNow(false)}>
              <Text style={occuredNow ? { color: 'black', textAlign: 'center' } : { color: 'white', textAlign: 'center' }}>NÃO</Text>
            </TouchableOpacity>
          </View>
          {occuredNow == false &&
            <View>
              <View style={{ marginTop: 24 }}>
                <Text style={{ color: '#77838F' }}>Informe a data</Text>
                <TextInputMask
                  style={{
                    borderWidth: 1,
                    borderColor: "#CDCDD2",
                    backgroundColor: 'white',
                    paddingLeft: 8,
                    marginVertical: 6,
                    width: 130
                  }}
                  placeholder="DD/MM/YYYY"
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY'
                  }}
                  value={date}
                  onChangeText={text => occuredNow == true ? setDate(null) : setDate(text)}
                />
              </View>
              <View style={{ marginTop: 12 }}>
                <Text style={{ color: '#77838F' }}>Informe o horário</Text>
                <TextInputMask
                  style={{
                    borderWidth: 1,
                    borderColor: "#CDCDD2",
                    backgroundColor: 'white',
                    paddingLeft: 8,
                    marginVertical: 6,
                    width: 130
                  }}
                  placeholder="HH:MM"
                  type={'datetime'}
                  options={{
                    format: 'HH:mm'
                  }}
                  value={time}
                  onChangeText={text => occuredNow == true ? setTime(null) : setTime(text)}
                />
              </View>
            </View>
          }
          <View style={{ marginTop: 24 }}>
            <Text style={{ color: '#77838F' }}>Descreva o ocorrido</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#CDCDD2",
                color: '#77838F',
                backgroundColor: 'white',
                paddingLeft: 8,
                marginVertical: 6,
                width: '90%',
                maxWidth: 320,
                height: 140,
                paddingBottom: 80
              }}
              multiline={true}
              maxLength={70} />
          </View>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: "8%",
    paddingTop: "2%",
  },
  title: {
    textTransform: "uppercase",
    color: "rgba(20,119,248,0.8)",
    fontFamily: "Montserrat_700Bold",
  },
  extraSpacing: {
    marginTop: 16,
    marginBottom: 32,
  },
  btn: {
    fontFamily: "Montserrat_500Medium",
    backgroundColor: '#fff',
    fontSize: 10,
    height: 32,
    width: 60,
    color: "#000",
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 3,
  },
  submitBtn: {
    marginTop: 10,
    backgroundColor: "rgba(20,119,248,0.8)",
    borderRadius: 3,
    width: "50%",
    maxWidth: 130,
  },
  submitBtnText: {
    paddingVertical: 8,
    textAlign: "center",
    color: "#fff",
  },
})

export default CvliRegister;
