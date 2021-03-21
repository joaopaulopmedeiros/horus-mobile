import React, { useState, useContext, useEffect, useCallback } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { AuthContext } from "../../../contexts/auth";
import { useFocusEffect } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import ListTypeOfCvlis from '../Main/ListTypeOfCvlis';

const CvliRegister = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const { loggedIn } = useContext(AuthContext);

  const [checked, setChecked] = useState(false);

  const [typeOfCvli, setTypeOfCvli] = useState(null);

  function handleNavigationToAccountLogin() {
    navigation.navigate('Conta', { screen: 'Login', initial: false });
  }

  useEffect(() => {
    console.log(typeOfCvli);
  },[typeOfCvli]);

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
          <Text style={{color: '#77838F', marginTop: 14, marginBottom: 8}}>
            <Text>Alguma dúvida? Confira nossos </Text> 
            <Text style={{color: "rgba(20,119,248,0.8)"}}>termos</Text>
          </Text>
          <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -8, }}>
              <RadioButton color="rgba(20,119,248,1)" value={true} />
              <Text style={{color: '#77838F'}}> 
                Concordo com os termos.
              </Text>
            </View>
          </RadioButton.Group>
          <Text style={{...styles.title, marginTop: 16}}>Registrar Crime</Text>
          <ListTypeOfCvlis setTypeOfCvli={setTypeOfCvli}/>
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
  }
})

export default CvliRegister;
