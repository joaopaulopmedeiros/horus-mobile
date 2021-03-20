import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import api from "../../../services/api"

const ListLastCvlis = ({navigation}) => {
  const [cvlis, setCvlis] = useState(null);

  useEffect(() => loadCvlis(), []);

  function loadCvlis() {
    api.get('/cvlis').then(response => {
      console.log(response.data.data);
      setCvlis(response.data.data);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <View
      style={{
        width: "100%",
        height: "30%",
        height: 240,
        justifyContent: "center",
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
        Últimos Casos
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          marginBottom: 32,
          //backgroundColor: 'green',
        }}
      >
        {cvlis != null
          ? <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ minWidth: "100%", paddingRight: 10 }}
          >
            {cvlis.map(cvli => (
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 2,
                  borderColor: "#eee",
                  height: 125,
                  width: 280,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingTop: 20,
                  paddingBottom: 16,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat_600SemiBold",
                    fontSize: 16,
                    width: "90%",
                    height: 24,
                    color: "rgba(20,119,248,0.8)",
                  }}
                >
                  {cvli.title}
                </Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Text
                    style={{
                      fontFamily: "Montserrat_500Medium",
                      fontSize: 10,
                      width: "62%",
                      height: 46,
                      color: "#77838F",
                    }}
                  >
                    {cvli.description}
                  </Text>
                  <View>
                    <TouchableOpacity
                      style={{
                        marginBottom: 2,
                      }}
                      onPress={() => {
                        navigation.navigate('Crimes', { screen: 'Detalhes',initial: false, params: { cvli: cvli } })
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Montserrat_500Medium",
                          fontSize: 10,
                          height: 24,
                          color: "#fff",
                          backgroundColor: "rgba(20,119,248,0.8)",
                          paddingVertical: 3,
                          paddingHorizontal: 6,
                          borderRadius: 3,
                        }}
                      >
                        Ver Registro
                  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderColor: "#000",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Montserrat_500Medium",
                          fontSize: 10,
                          height: 22,
                          color: "#000",
                          paddingVertical: 3,
                          paddingHorizontal: 6,
                          borderWidth: 1,
                          borderRadius: 3,
                        }}
                      >
                        Denunciar
                  </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {cvli.verified == 1 &&
                  <View style={{ marginTop: 4, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require("../../../../assets/verified.png")} />
                    <Text
                      style={{
                        fontFamily: "Montserrat_500Medium",
                        fontSize: 10,
                        marginLeft: 4
                      }}
                    >
                      Verificado
                    </Text>
                  </View>
                }
              </TouchableOpacity>
            ))}
          </ScrollView>
          : <Text>Carregando...</Text>}
      </View>
    </View>
  );
};

export default ListLastCvlis;
