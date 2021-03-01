import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

const ListLast = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "30%",
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ minWidth: "100%", paddingRight: 10 }}
        >
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
              Fiat Uno Roubado
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
                Lorem Ipsum is simply text of the printing and typesetting
                industry.
              </Text>
              <View>
                <TouchableOpacity
                  style={{
                    marginBottom: 2,
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
            <View style={{marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require("../../../assets/verified.png")} />
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
          </TouchableOpacity>
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
              Fiat Uno Roubado
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
                Lorem Ipsum is simply text of the printing and typesetting
                industry.
              </Text>
              <View>
                <TouchableOpacity
                  style={{
                    marginBottom: 2,
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
            <View style={{marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require("../../../assets/verified.png")} />
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
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ListLast;
