import React, { useState, useContext, useEffect } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AuthContext } from "../../../contexts/auth";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const insets = useSafeAreaInsets();

  const { register, setValue, handleSubmit, errors } = useForm();

  useEffect(() => {
    register({ name: 'email' }, { required: true });
    register({ name: 'password' }, { required: true, minLength: 5, maxLength: 255 });
  }, [register])

  function onSubmit(data) {
    console.log('Form Data', data);
    login(data);
  };

  function handleNavigationToAccountRegister() {
    navigation.navigate('Conta', { screen: 'Registrar', initial: false })
  }


  return (
    <Container marginTop={insets.top}>
      <Header title="Conta" />
      <View style={styles.wrapper}>
        <Image
          style={styles.avatar}
          width={40}
          source={require("../../../../assets/user.png")}
        />
        <Text style={styles.title}>Olá, seja bem-vindo</Text>
        <View
          style={styles.container}
        >
          <Text>Seu Email</Text>
          <TextInput
            style={styles.editableInput}
            placeholderTextColor="#999"
            autoCompleteType="email"
            autoCapitalize="none"
            onChangeText={text => setValue('email', text, true)}
          />
          {errors.email && errors.email.type === "required" && <Text style={styles.errorMessage}>O campo de e-mail é obrigatório</Text>}
          <Text>Sua Senha</Text>
          <TextInput
            style={styles.editableInput}
            placeholderTextColor="#999"
            secureTextEntry={true}
            onChangeText={text => setValue('password', text, true)}
          />
          {errors.password && errors.password.type === "required" && <Text style={styles.errorMessage}>O campo de senha é obrigatório</Text>}
          {errors.password && (errors.password.type === "minLength" || errors.password.type === "maxLength") && <Text style={styles.errorMessage}>O campo de senha deve conter entre 5 e 255 caracteres</Text>}

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.register}>Ainda não tem uma conta?
            <Text onPress={() => { handleNavigationToAccountRegister() }} style={styles.registerLink}> Registre-se</Text>
          </Text>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
  },
  avatar: {
    marginTop: "10%",
    marginBottom: "5%"
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    color: "rgba(20,119,248,1)",
    marginBottom: 20,
  },
  notEditableInput: {
    borderWidth: 2,
    borderColor: "#CDCDD2",
    backgroundColor: "#E7E4E4",
    color: '#000',
    paddingLeft: 8,
  },
  editableInput: {
    borderWidth: 2,
    borderColor: "#CDCDD2",
    paddingLeft: 8,
    marginVertical: 4,
  },
  loginBtn: {
    marginTop: 10,
    backgroundColor: "rgba(20,119,248,0.8)",
    borderRadius: 3,
    width: "25%",
    alignSelf: "center",
  },
  loginBtnText: {
    paddingVertical: 8,
    textAlign: "center",
    color: "#fff",
  },
  register: {
    marginTop: 20,
    alignSelf: "center",
  },
  registerLink: {
    color: "rgba(20,119,248,1)",
  },
  errorMessage: {
    color: 'red',
    fontSize: 11,
    marginBottom: 4
  }
})

export default Login;
