import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

const ListTypeOfCvlis = ({ navigation, setTypeOfCvli }) => {
  const basePath = "../../../../assets/tipos_crimes";
  const activePath = "/active";
  const unactivePath = "/unactive";

  const typeOfCvlis = [
    { id: 1, title: 'Roubo de Veículos', imgUnactivePath: require(basePath + unactivePath + "/roubo-veiculos.png"), imgActivePath: require(basePath + activePath + "/roubo-veiculos.png") },
    { id: 2, title: 'Furtos', imgUnactivePath: require(basePath + unactivePath + "/furto.png"), imgActivePath: require(basePath + activePath + "/furto.png") },
    { id: 3, title: 'Roubo à mão armada', imgUnactivePath: require(basePath + unactivePath + "/roubo-mao-armada.png"), imgActivePath: require(basePath + activePath + "/roubo-mao-armada.png") },
    { id: 4, title: 'Agressão', imgUnactivePath: require(basePath + unactivePath + "/agressao.png"), imgActivePath: require(basePath + activePath + "/agressao.png") },
    { id: 5, title: 'Acidente de trânsito', imgUnactivePath: require(basePath + unactivePath + "/acidente-transito.png"), imgActivePath: require(basePath + activePath + "/acidente-transito.png") },
    { id: 6, title: 'Maus tratos a animais', imgUnactivePath: require(basePath + unactivePath + "/maustratos-animais.png"), imgActivePath: require(basePath + activePath + "/maustratos-animais.png") },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  useFocusEffect(
    useCallback(() => {
      return () => setSelectedCard(null);
    }, [navigation])
  );

  return (
    <View style={styles.wrapper}>
      {navigation && <Text style={styles.title}>
        Tipos de Crimes
      </Text>}
      <View style={styles.cvlisWrapper}>
        {typeOfCvlis.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={1}
            style={selectedCard == item.id ? styles.activeCard : styles.unactiveCard}
            onPress={() => {
              {
                setSelectedCard(item.id);
                if (navigation) {
                  navigation.navigate('Crimes', { screen: 'ListaPorTipo', initial: false, params: { type: item.id } })
                }
                if (setTypeOfCvli) {
                  setTypeOfCvli(item.id);
                };
              }
            }}
          >
            <Image source={selectedCard == item.id ? item.imgActivePath : item.imgUnactivePath} />
            <Text style={selectedCard == item.id ? styles.activeCardTitle : styles.unactiveCardTitle}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "30%",
    height: 540,
    paddingLeft: "8%",
    paddingTop: "2%",
  },
  title: {
    textTransform: "uppercase",
    color: "rgba(20,119,248,0.8)",
    fontFamily: "Montserrat_700Bold",
  },
  cvlisWrapper: {
    flexDirection: "row",
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 16,
    marginBottom: 32,
    marginLeft: -10,
  },
  unactiveCard: {
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
  },
  activeCard: {
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
  },
  unactiveCardTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 13,
    width: "90%",
    color: "rgba(20,119,248,0.8)",
    textAlign: "center",
    marginTop: 2
  },
  activeCardTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 13,
    width: "90%",
    color: "#fff",
    textAlign: "center",
    marginTop: 2
  },
})

export default ListTypeOfCvlis;
