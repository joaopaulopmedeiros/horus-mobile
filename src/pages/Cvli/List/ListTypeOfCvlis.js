import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";

const ListTypeOfCvlis = ({ navigation }) => {
  const typeOfCvlis = [
    { id: 1, title: 'Roubo de Veículos', imgPath: require("../../../../assets/roubo-veiculos.png") },
    { id: 2, title: 'Furtos', imgPath: require("../../../../assets/furto.png") },
    { id: 3, title: 'Roubo à mão armada', imgPath: require("../../../../assets/roubo-mao-armada.png") },
    { id: 4, title: 'Agressão', imgPath: require("../../../../assets/agressao.png") },
    { id: 5, title: 'Acidente de trânsito', imgPath: require("../../../../assets/acidente-transito.png") },
    { id: 6, title: 'Maus tratos a animais', imgPath: require("../../../../assets/maustratos-animais.png") },
  ];
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Tipos de Crimes
      </Text>
      <View style={styles.cvlisWrapper}>
        {typeOfCvlis.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={1}
            style={styles.card}
            onPress={() => {
              navigation.navigate('Crimes', { screen: 'ListaPorCategoria', initial: false })
            }}
          >
            <Image source={item.imgPath} />
            <Text style={styles.cardTitle}>
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
    flexWrap: 'wrap',
    marginTop: 16,
    marginBottom: 32,
  },
  card: {
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
  cardTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 13,
    width: "90%",
    color: "rgba(20,119,248,0.8)",
    textAlign: "center",
    marginTop: 2
  }
})

export default ListTypeOfCvlis;
