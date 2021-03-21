import React, { useState, useContext, useEffect, useCallback } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { AuthContext } from "../../../contexts/auth";
import { useFocusEffect } from '@react-navigation/native';

const CvliRegister = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const { loggedIn } = useContext(AuthContext);

  function handleNavigationToAccountLogin() {
    navigation.navigate('Conta', { screen: 'Login', initial: false });
  }

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
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
})

export default CvliRegister;
