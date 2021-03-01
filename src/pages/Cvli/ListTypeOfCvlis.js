import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

const ListTypeOfCvlis = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "30%",
        paddingLeft: "8%",
        paddingTop: "2%",
        //backgroundColor: 'green'
      }}
    >
      <Text
        style={{
          textTransform: "uppercase",
          color: "rgba(20,119,248,0.8)",
          fontFamily: "Montserrat_700Bold",
        }}
      >
        Tipos de Crimes
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: 'wrap',
          marginTop: 16,
          marginBottom: 32,
          //backgroundColor: 'green',
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "rgba(20,119,248,0.8)",
            height: 125,
            width: '40%',
            maxWidth: 160,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",            
            marginVertical: 8,
            marginRight: 16
          }}
        >
          <Image source={require("../../../assets/roubo-veiculos.png")} />
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 13,
              width: "90%",
              color: "#fff",
              textAlign: "center",
              marginTop: 2
            }}
          >
            Roubo de Veículos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "#fff",
            height: 125,
            width: '40%',
            maxWidth: 160,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 8,
            marginHorizontal: 16
          }}
        >
          <Image source={require("../../../assets/furto.png")} />
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 13,
              width: "90%",
              color: "rgba(20,119,248,0.8)",
              textAlign: "center",
            }}
          >
            Furtos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "#fff",
            height: 125,
            width: '40%',
            maxWidth: 160,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 8,
            marginRight: 16
          }}
        >
          <Image source={require("../../../assets/roubo-mao-armada.png")} />
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 13,
              width: "90%",
              color: "rgba(20,119,248,0.8)",
              textAlign: "center",
            }}
          >
            Roubo à mão armada
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "#fff",
            height: 125,
            width: '40%',
            maxWidth: 160,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 8,
            marginHorizontal: 16
          }}
        >
          <Image source={require("../../../assets/agressao.png")} />
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 13,
              width: "90%",
              color: "rgba(20,119,248,0.8)",
              textAlign: "center",
            }}
          >
            Agressão
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "#fff",
            height: 125,
            width: '40%',
            maxWidth: 160,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 8,
            marginRight: 16
          }}
        >
          <Image source={require("../../../assets/acidente-transito.png")} />
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 13,
              width: "90%",
              color: "rgba(20,119,248,0.8)",
              textAlign: "center",
            }}
          >
            Acidente de trânsito
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: "#fff",
            height: 125,
            width: '40%',
            maxWidth: 160,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 8,
            marginHorizontal: 16
          }}
        >
          <Image source={require("../../../assets/maltratos-animais.png")} />
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 13,
              width: "90%",
              color: "rgba(20,119,248,0.8)",
              textAlign: "center",
            }}
          >
            Maltratos a animais
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListTypeOfCvlis;
