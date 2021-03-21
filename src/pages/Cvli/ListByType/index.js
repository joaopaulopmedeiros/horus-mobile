import React, { useContext } from "react";
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CvliListByTipe = () => {

    const insets = useSafeAreaInsets();

    return (
        <Container marginTop={insets.top}>
            <Header title="Crimes Registrados" />
            <View>
                <Text>It does work!</Text>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({

})

export default CvliListByTipe;
