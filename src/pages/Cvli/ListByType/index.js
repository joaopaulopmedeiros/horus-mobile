import React, { useState, useEffect } from "react";
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import api from "../../../services/api";

import VerifiedIcon from "../../../styles/icons/index";

const CvliListByTipe = () => {
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

    const insets = useSafeAreaInsets();

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <View style={{ paddingBottom: 8, borderBottomColor: '#CDCDD2', borderBottomWidth: 2 }}>
                <Text style={styles.cvliTitle}>{item.title}</Text>
            </View>
            <View style={{ paddingTop: 8}}>
                <Text style={styles.cvliDescription}>{item.description}</Text>
                {item.verified == 1 &&
                    <View style={styles.verifiedWrapper}>
                        <Text>
                            <VerifiedIcon />
                        </Text>
                        <Text style={styles.verifiedText}>Verificado</Text>
                    </View>
                }
            </View>
        </View>
    );

    return (
        <Container marginTop={insets.top}>
            <Header title="Crimes Registrados" />
            <FlatList
                style={styles.wrapper}
                contentContainerStyle={styles.list}
                data={cvlis}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        marginTop: 30,
        marginBottom: 12,
    },
    list: {
        paddingHorizontal: 20,
    },
    listItem: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        padding: 30,
        borderRadius: 5,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    cvliTitle: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        width: "90%",
        height: 24,
        color: "rgba(20,119,248,0.8)",
    },
    cvliDescription: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 10,
        height: 40,
        color: "#77838F",
    },
    verifiedWrapper: {
        marginTop: 3,
        display: 'flex',
        flexDirection: 'row'
    },
    verifiedText: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 10,
        marginLeft: 2,
        color: '#77838F'
    },
})

export default CvliListByTipe;
