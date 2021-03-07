import React, {useContext} from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { AuthContext } from "../../contexts/auth";

const Login = () => {
  const { login } = useContext(AuthContext);

  function handleLogin() {
    login();
  }

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
      <Text
        style={{
          fontFamily: "Montserrat_600SemiBold",
          color: "rgba(20,119,248,1)",
          marginBottom: 20,
        }}
      >
        Olá, seja bem-vindo
      </Text>
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
          onPress={handleLogin}
          style={{
            marginTop: 10,
            backgroundColor: "rgba(20,119,248,0.8)",
            borderRadius: 3,
            width: "25%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              color: "#fff",
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 40,
            alignSelf: "center",
          }}
        >
          Ainda não tem uma conta? <Text style={{color: "rgba(20,119,248,1)"}}>Registre-se</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
