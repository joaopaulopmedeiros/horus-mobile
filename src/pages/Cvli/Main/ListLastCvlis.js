import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from "react-native";
import api from "../../../services/api";


const ListLastCvlis = ({ navigation }) => {
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
    <View style={styles.wrapper}>
      <Text style={styles.title}>Últimos Casos</Text>
      <View style={styles.extraSpacing}>
        {cvlis != null
          ?
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ minWidth: "100%", paddingRight: 10 }}
          >
            {cvlis.map(cvli => (
              <TouchableOpacity
                key={cvli.id}
                activeOpacity={1}
                style={styles.card}
              >
                <Text style={styles.cvliTitle}>
                  {cvli.title}
                </Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Text style={styles.cvliDescription}>
                    {cvli.description}
                  </Text>
                  <View>
                    <TouchableOpacity
                      style={{
                        marginBottom: 2,
                      }}
                      onPress={() => {
                        navigation.navigate('Crimes', { screen: 'Detalhes', initial: false, params: { cvli: cvli } })
                      }}
                    >
                      <Text style={styles.btnGoToCvli}>
                        Ver Registro
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.border}>
                      <Text style={styles.btnDenuntiateCvli}>
                        Denunciar
                  </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {cvli.verified == 1 &&
                  <View style={styles.verifiedWrapper}>
                    <Image source={require("../../../../assets/verified.png")} />
                    <Text style={styles.verifiedText}>
                      Verificado
                    </Text>
                  </View>
                }
              </TouchableOpacity>
            ))}
          </ScrollView>
          :
          <View>
            <ActivityIndicator size="large" color="rgba(20,119,248,0.8)" />
          </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "30%",
    height: 240,
    justifyContent: "center",
    paddingLeft: "8%",
    paddingTop: "2%",
  },
  title: {
    textTransform: "uppercase",
    color: "rgba(20,119,248,0.8)",
    fontFamily: "Montserrat_700Bold",
  },
  extraSpacing: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 32,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 125,
    width: 280,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  cvliTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    width: "90%",
    height: 24,
    color: "rgba(20,119,248,0.8)",
  },
  cvliDescription: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 10,
    width: "62%",
    height: 46,
    color: "#77838F",
  },
  btnGoToCvli: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 10,
    height: 24,
    color: "#fff",
    backgroundColor: "rgba(20,119,248,0.8)",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  btnDenuntiateCvli: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 10,
    height: 22,
    color: "#000",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 3,
  },
  verifiedWrapper: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  verifiedText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 10,
    marginLeft: 4
  },
  border: {
    borderColor: "#000",
  },
})

export default ListLastCvlis;
