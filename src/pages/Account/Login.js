import React from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";

const Login = () => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ marginTop: "10%", marginBottom: "5%" }}
        width={40}
        source={require("../../../assets/user.png")}
      />
      <Text style={{
          fontFamily: 'Montserrat_600SemiBold',
          color: "rgba(20,119,248,1)",
          marginBottom: 20
      }}>Olá, seja bem-vindo</Text>
      <View
        style={{
          width: "80%",
        }}
      >
        <Text>Seu Email</Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#CDCDD2",
          }}
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <Text style={{ marginTop: 10 }}>Sua Senha</Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#CDCDD2",
          }}
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "rgba(20,119,248,0.8)",
            borderRadius: 3,
            width: "25%",
            alignSelf: 'center'
          }}
        >
          <Text
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              color: '#fff'
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;